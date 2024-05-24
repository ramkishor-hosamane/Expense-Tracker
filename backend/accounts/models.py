from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class UserProfile(models.Model):
  user = models.OneToOneField(User, verbose_name="User", on_delete=models.CASCADE)
  profile_pic = models.ImageField(upload_to='user_profile_pics')

