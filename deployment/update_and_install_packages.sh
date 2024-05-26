#!/bin/bash

# Update and upgrade the system
sudo apt update
sudo apt upgrade -y

# Install necessary packages
sudo apt install -y python3-pip python3-dev nginx git
sudo apt install -y libjpeg-dev zlib1g-dev
