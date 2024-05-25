from .base import *

DEBUG = True

ALLOWED_HOSTS = ['*']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
ELASTICSEARCH_DSL = {
    'default': {
        'hosts': 'localhost:9200',
    },
}
ELASTICSEARCH_AVAILABLE = True


FRONT_END_DOMAIN = 'localhost:4200'
CORS_ALLOWED_ORIGINS = ['http://localhost:4200']
