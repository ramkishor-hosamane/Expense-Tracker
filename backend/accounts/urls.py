from django.urls import path
from .views import AccountAPIView, LogInView, Logout, SignUpAPIView,ForgotPasswordAPIView,ResetPasswordAPIView

urlpatterns = [
    path('login/', LogInView.as_view(), name='api_login'),
    path('logout/', Logout.as_view(), name='api_logout'),
    path('signup/', SignUpAPIView.as_view(), name='signup'),
    path('forgot-password/', ForgotPasswordAPIView.as_view(), name='forgot-password'),
    path('reset-password/<str:token>', ResetPasswordAPIView.as_view(), name='reset-password'),
    path('my-account',AccountAPIView.as_view())    
]
