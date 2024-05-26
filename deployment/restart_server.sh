#!/bin/bash

cd /home/ubuntu/Expense-Tracker/backend

source env/bin/activate
sudo systemctl reload nginx
sudo systemctl daemon-reload
sudo systemctl restart gunicorn
deactivate

