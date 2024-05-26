

# production.py
from .base import *

DEBUG = True

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
    'http://3.27.167.132:8000',
      'http://3.27.167.132',

]

ELASTICSEARCH_AVAILABLE = False

