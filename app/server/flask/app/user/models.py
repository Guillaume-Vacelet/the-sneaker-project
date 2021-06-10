from flask import Flask, jsonify, request, session
from passlib.hash import pbkdf2_sha256
from app.app import db
import uuid

class User:

  def start_session(self, user):
    del user['password']
    session['logged_in'] = True
    session['user'] = user
    return jsonify(user), 200

  def signup(self):
    # Create the user object
    new_user = {
      "_id": uuid.uuid4().hex,
      "username": request.args.get('username'),
      "email": request.args.get('email'),
      "password": request.args.get('password'),
    }

    print(new_user)

    # Encrypt the password
    new_user['password'] = pbkdf2_sha256.hash(new_user['password'])

    # Check for existing email address
    # if db.users.find_one({"email": new_user['email']}):
    #   return jsonify({"error": "Email adress already in use."}), 400

    if db.users.insert_one(new_user):
      return self.start_session(new_user)

    return jsonify({"error": "Signup failed."}), 400


  def signin(self):
    print(request.args)

    user = db.users.find_one({
      "email": request.args.get('email')
    })

    print(user)
    # print(pbkdf2_sha256.verify(request.args.get('password'), user['password']))

    if user and pbkdf2_sha256.verify(request.args.get('password'), user['password']):
      return self.start_session(user)

    return jsonify({"error": "Signin failed."}), 400