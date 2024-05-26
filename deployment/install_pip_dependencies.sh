#!/bin/bash

cd /home/ubuntu/Expense-Tracker/backend
# Set up a virtual environment
sudo apt install python3-virtualenv
#sudo pip3 install virtualenv

virtualenv env
source env/bin/activate

cd /home/ubuntu/Expense-Tracker/backend
# Install project dependencies
pip install -r requirements.txt


# Migrate the database and collect static files
python manage.py migrate
python manage.py collectstatic --noinput

# Deactivate virtual environment
deactivate

