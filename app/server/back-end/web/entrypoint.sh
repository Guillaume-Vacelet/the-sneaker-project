#!/usr/bin/env bash
python3 manage.py db init
python3 manage.py db migrate
python3 manage.py db upgrade
python3 run.py