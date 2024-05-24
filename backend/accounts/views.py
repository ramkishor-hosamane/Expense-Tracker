from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import views
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from accounts.custom_email_backend import SnsEmailBackend
from .serializers import UserSerializer
from django.contrib.auth.models import User

from django.core import signing
from django.utils import timezone
from rest_framework.exceptions import NotFound
from rest_framework.permissions import AllowAny
from django.core.mail.message import EmailMessage
from django.urls import reverse
from django.contrib.sites.shortcuts import get_current_site
from django.conf import settings

class LogInView(ObtainAuthToken):
    
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({'token': token.key})

class Logout(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        request.user.auth_token.delete()
        return Response(status=status.HTTP_200_OK)
    
class SignUpAPIView(APIView):
    def post(self, request, format=None):
        print(request.data)
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ForgotPasswordAPIView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        email = request.data.get('email')
        user = User.objects.filter(email=email).first()
        if user:
            token = self.generate_reset_token(user)
            # Send email with reset link containing token
            # You can use Django's built-in email functionality or a third-party library like django-allauth.
            # Example: send_reset_email(user.email, token)
            self.send_reset_email(email, token)

            return Response({'tolen':token,'message': 'If your email exists in our system, you will receive password reset instructions shortly.'})
        return Response({'error': 'No user found with that email address.'}, status=status.HTTP_404_NOT_FOUND)

    def generate_reset_token(self, user):
        expiration = timezone.now() + timezone.timedelta(hours=1)  # Token expires after 1 hour
        expiration_str = expiration.isoformat()  # Convert datetime to string

        data = {'user_id': user.pk, 'expiration': expiration_str}
        return signing.dumps(data)
    def send_reset_email(self, email, token):
        sns_backend = SnsEmailBackend()
        subject = 'Password Reset Request'
        #domain = get_current_site(self.request).domain
        front_end_domain = settings.FRONT_END_DOMAIN
        reset_url = reverse('reset-password',args=(token,))
        #reset_link_for_frontend = f'http://{domain}{reset_url}'  # Assuming HTTP, adjust if using HTTPS
        reset_link_for_mail = f'http://{front_end_domain}/reset-password?token={token}'  # Assuming HTTP, adjust if using HTTPS
        
        
        # Compose the email message
        message = f'Click the link below to reset your password:\n\n{reset_link_for_mail}'        
        # Create an email message object
        email_message = EmailMessage(subject, message, to=[email])

        # Send the email message using the SNS email backend
        sns_backend.send_messages([email_message])
class ResetPasswordAPIView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, token):
        try:
            data = signing.loads(token, max_age=3600)  # Token expires after 1 hour
            user_id = data['user_id']
            expiration_str = data['expiration']
            expiration = timezone.datetime.fromisoformat(expiration_str)  # Convert string to datetime
            user = User.objects.get(pk=user_id)
        except (signing.BadSignature, User.DoesNotExist, KeyError):
            raise NotFound('Invalid or expired reset link.')

        if timezone.now() > expiration:
            raise NotFound('Invalid or expired reset link.')

        new_password = request.data.get('new_password')
        user.set_password(new_password)
        user.save()
        return Response({'message': 'Password reset successfully.'})