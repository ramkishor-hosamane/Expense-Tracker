from .base import *

DEBUG = True

ALLOWED_HOSTS = ['*']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db_dev.sqlite3',
    }
}
ELASTICSEARCH_DSL = {
    'default': {
        'hosts': 'localhost:9200',
    },
}
ELASTICSEARCH_AVAILABLE = False


FRONT_END_DOMAIN = 'localhost:4200'
CORS_ALLOWED_ORIGINS = ['http://localhost:4200']
