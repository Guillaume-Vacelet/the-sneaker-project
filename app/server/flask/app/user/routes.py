from flask import Flask, jsonify
from app.app import app, db
from .model import User

@app.route('/users', methods=['GET'])
def get_users():
  _users = db.users.find()
  if not _users:
    print(_users)
    return None
  print(_users)
  users = [{
    'username': user['username'], 
    'email': user['email'], 
    'password': user['password']
  } for user in _users]
  return jsonify({"users": users})

@app.route('/user/<userid>', methods=['GET'])
def get_user(userid):
  return User().get_user_informations(userid)

@app.route('/user/signup', methods=['POST'])
def signup():
  return User().signup()

@app.route('/user/signin', methods=['POST'])
def signin():
  return User().signin()

@app.route('/user/email/verify/<code>', methods=['POST'])
def verify_email(code):
  return User().verify_email(code)

@app.route('/user/email/verify/send-code', methods=['POST'])
def send_code():
  return User().send_code()

@app.route('/user/reset-password', methods=['POST'])
def reset_password():
  return User().reset_password()

@app.route('/user/update', methods=['POST'])
def update():
  return User().update()