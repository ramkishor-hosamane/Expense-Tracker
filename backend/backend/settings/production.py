

# production.py
from .base import *

DEBUG = True
HOST_IP ='3.107.50.43'
ALLOWED_HOSTS = ['*']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
# Add any additional production-specific settings here
ELASTICSEARCH_DSL = {
    'default': {
        'hosts': 'localhost:9200',
    },
}

FRONT_END_DOMAIN = 'localhost:4200'
CORS_ALLOWED_ORIGINS = [
    'http://localhost:4200',
    f'http://{HOST_IP}:8000',
      f'http://{HOST_IP}',

]

ELASTICSEARCH_AVAILABLE = False

