  213  sudo apt-get install -y libjpeg-dev zlib1g-dev
  217  sudo nano /etc/systemd/system/gunicorn.socket
  218  sudo nano /etc/systemd/system/gunicorn.service 
  219  sudo systemctl start gunicorn.socket
  220  sudo systemctl daemon-reload
  221  sudo systemctl start gunicorn.socket
  222  sudo systemctl enable gunicorn.socket
  223  sudo systemctl status gunicorn.socket
  224  sudo nano /etc/nginx/sites-available/blo
  225  sudo nano /etc/nginx/sites-available/Expense-Tracker
  226  sudo cat /etc/nginx/sites-available/Expense-Tracker
  227  sudo rm -r /etc/nginx/sites-available/Expense-Tracker 
  228  sudo rm -r /etc/nginx/sites-available/
  230  sudo nano /etc/nginx/sites-available/Expense-Tracker
  231  sudo ln -s /etc/nginx/sites-available/Expense-Tracker /etc/nginx/sites-enabled/
  232  sudo rm -r /etc/nginx/sites-enabled/Expense-Tracker
  233  sudo ln -s /etc/nginx/sites-available/Expense-Tracker /etc/nginx/sites-enabled/
  234  sudo ls /etc/nginx/sites-enabled/Expense-Tracker
  235  sudo gpassword -a www-data ubuntu
  236  sudo gpasswd -a www-data ubuntu 
  237  sudo systemctl restart ngnix
  238  sudo systemctl restart nginx
  239  sudo journalctl -xeu nginx.service
  241  ubuntu@ip-172-31-0-106:~/Expense-Tracker/backend$ sudo journalctl -xeu nginx.service
  295  sudo nano /etc/nginx/nginx.conf
  296  sudo nano /etc/nginx/sites-enabled/default
  297  sudo nginx -t
  298  sudo systemctl restart nginx
  299  sudo systemctl status nginx
  301  sudo service gunicorn restart
  302  sudo service nginx restart
  303  sudo nano /etc/nginx/nginx.conf
  304  sudo nano /etc/nginx/sites-available/Expense-Tracker
  305  sudo service nginx restart
  306  sudo tail -f /var/log/nginx/error.log
  307  sudo systemctl status gunicorn
  311  sudo nano /etc/systemd/system/gunicorn.service
  312  sudo systemctl daemon-reload
  313  sudo systemctl restart gunicorn
  314  sudo systemctl status gunicorn
  317  sudo /home/ubuntu/Expense-Tracker/backend/env/bin/gunicorn --workers 3 --bind unix:/run/gunicorn.sock backend.wsgi:application
  320  sudo nano /etc/systemd/system/gunicorn.service
  321  sudo systemctl daemon-reload
  322  sudo systemctl restart gunicorn
  323  sudo systemctl status gunicornsudo systemctl status gunicorn
  324  sudo systemctl status gunicorn
  325  sudo sudo systemctl status gunicorn
  338  sudo journalctl -xeu gunicorn.service
  343  sudo chmod 1777 /run
  344  sudo systemctl restart gunicorn
  345  sudo systemctl daemon-reload
  346  sudo systemctl restart gunicorn
  347  sudo systemctl status gunicorn
  348  sudo nano /etc/nginx/sites-available/Expense-Tracker
  350  sudo nano /etc/nginx/sites-available/Expense-Tracker
  351  sudo systemctl reload nginx
