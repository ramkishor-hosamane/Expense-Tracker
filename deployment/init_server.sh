#!/bin/bash

# Update and upgrade the system
sudo apt update
sudo apt upgrade -y

# Install necessary packages
sudo apt install -y python3-pip python3-dev nginx git
sudo apt install -y libjpeg-dev zlib1g-dev

cd /home/ubuntu/Expense-Tracker/backend
# Set up a virtual environment
sudo apt install python3-virtualenv
#sudo pip3 install virtualenv

virtualenv venv
source venv/bin/activate

cd /home/ubuntu/Expense-Tracker/backend
# Install project dependencies
pip install -r requirements.txt

# Pull and run Elasticsearch Docker container


# Migrate the database and collect static files
python manage.py migrate
python manage.py collectstatic --noinput

# Deactivate virtual environment
deactivate

