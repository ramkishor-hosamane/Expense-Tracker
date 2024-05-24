#!/bin/bash

cd /home/ubuntu/Expense-Tracker/backend

# Activate virtual environment
source venv/bin/activate

# Install and configure Gunicorn
sudo cp /home/ubuntu/Expense-Tracker/deployment/gunicorn.service /etc/systemd/system/
sudo systemctl start gunicorn
sudo systemctl enable gunicorn

# Deactivate virtual environment
deactivate

# Configure Nginx
sudo cp /home/ubuntu/Expense-Tracker/deployment/nginx.conf /etc/nginx/sites-available/Expense-Tracker
sudo ln -s /etc/nginx/sites-available/Expense-Tracker /etc/nginx/sites-enabled
sudo nginx -t
sudo systemctl restart nginx

echo "Deployment completed successfully."
