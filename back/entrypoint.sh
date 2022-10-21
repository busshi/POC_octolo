#!/bin/sh

pip install --upgrade pip
pip install Django
pip install django-cors-headers
#pip install django-socket-server

[ ! -d poc ] && django-admin startproject poc
cd poc && python manage.py migrate && python manage.py runserver 0.0.0.0:8000

exit 0