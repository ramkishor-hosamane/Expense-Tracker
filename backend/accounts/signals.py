# signals.py
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.conf import settings
import boto3

@receiver(post_save, sender=User)
def subscribe_user_to_topic(sender, instance, created, **kwargs):
    print("Subscribing mate")
    if created:
        email_address = instance.email
        topic_arn = 'arn:aws:sns:ap-southeast-2:381492026061:reset-password'
        subscribe_email_to_topic(email_address, topic_arn)

def subscribe_email_to_topic(email_address, topic_arn):
    sns_client = boto3.client('sns', region_name='ap-southeast-2', aws_access_key_id = settings.AWS_ACCESS_KEY_ID,
    aws_secret_access_key = settings.AWS_SECRET_ACCESS_KEY)

    response = sns_client.subscribe(
        TopicArn=topic_arn,
        Protocol='email',
        Endpoint=email_address
    )

    subscription_arn = response['SubscriptionArn']
    return subscription_arn
