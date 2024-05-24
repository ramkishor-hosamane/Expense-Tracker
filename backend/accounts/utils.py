# utils.py
from django.utils.crypto import get_random_string
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode
from .tokens import account_activation_token

def generate_reset_token(user):
    token = account_activation_token.make_token(user)
    return token
