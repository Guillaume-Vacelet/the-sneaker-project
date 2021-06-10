from flask import Flask, jsonify
from flask_cors import cross_origin
from app.app import app, db
from .models import User

@app.route('/user/signup', methods=['POST'])
@cross_origin()
def signup():
  return User().signup()

@app.route('/user/signin', methods=['POST'])
@cross_origin()
def signin():
  return User().signin()

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