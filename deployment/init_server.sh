#!/bin/bash

# Update and upgrade the system
sudo apt update
sudo apt upgrade -y

# Install necessary packages
sudo apt install -y python3-pip python3-dev nginx git docker.io

# Start and enable Docker
sudo systemctl start docker
sudo systemctl enable docker

# Clone your Django project repository
git clone https://github.com/ramkishor-hosamane/Expense-Tracker.git /home/ubuntu/Expense-Tracker
cd /home/ubuntu/Expense-Tracker/backend

# Set up a virtual environment
sudo pip3 install virtualenv
virtualenv venv
source venv/bin/activate

# Install project dependencies
pip install -r requirements.txt

# Migrate the database and collect static files
python manage.py migrate
python manage.py collectstatic --noinput

# Deactivate virtual environment
deactivate

# Pull and run Elasticsearch Docker container
docker pull docker.elastic.co/elasticsearch/elasticsearch:7.10.0
docker run --name elasticsearch -d -p 9200:9200 -p 9300:9300 docker.elastic.co/elasticsearch/elasticsearch:7.10.0
