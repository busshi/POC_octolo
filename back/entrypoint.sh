#!/bin/sh

pip install --upgrade pip
pip install django django-cors-headers

[ ! -d poc ] && django-admin startproject poc
cd poc && python manage.py migrate && python manage.py runserver 0.0.0.0:8000

exit 0