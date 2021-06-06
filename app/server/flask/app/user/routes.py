from flask import Flask
from flask_cors import cross_origin
from app.app import app
from .models import User

@app.route('/user/signup', methods=['POST'])
@cross_origin()
def signup():
  return User().signup()

@app.route('/user/signin', methods=['POST'])
@cross_origin()
def signin():
  return User().signin()