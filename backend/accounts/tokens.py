# tokens.py
from django.contrib.auth.tokens import PasswordResetTokenGenerator
#from django.utils import six

class AccountActivationTokenGenerator(PasswordResetTokenGenerator):
    pass
account_activation_token = AccountActivationTokenGenerator()
