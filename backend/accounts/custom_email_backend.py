# custom_email_backend.py
import boto3
from django.core.mail.backends.base import BaseEmailBackend
from django.conf import settings

class SnsEmailBackend(BaseEmailBackend):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.client = boto3.client('sns', region_name='ap-southeast-2',aws_access_key_id = settings.AWS_ACCESS_KEY_ID,
    aws_secret_access_key = settings.AWS_SECRET_ACCESS_KEY)

    def send_messages(self, email_messages):
        for message in email_messages:
            subject = message.subject
            body = message.body
            recipients = message.recipients()

            for recipient in recipients:
                self.client.publish(
                    TopicArn='arn:aws:sns:ap-southeast-2:381492026061:reset-password',
                    Subject=subject,
                    Message=body,
                    MessageAttributes={
                        'email': {
                            'DataType': 'String',
                            'StringValue': recipient,
                        }
                    }
                )
