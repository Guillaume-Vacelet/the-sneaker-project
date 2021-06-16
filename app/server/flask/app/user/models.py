from flask import Flask, jsonify, request
from passlib.hash import pbkdf2_sha256
from app.app import db
from app.emails import Email
from app.utils import random_code
import time
import uuid
import datetime


class User:

    def signup(self):
        # Create the user object
        email_verification_code = random_code(5)
        new_user = {
            "_id": uuid.uuid4().hex,
            'creation_date': datetime.datetime.utcnow(),
            "username": request.args.get('username'),
            "email": request.args.get('email'),
            # Encrypt the password
            "password": pbkdf2_sha256.hash(request.args.get('password')),
            "email_verified": False,
            "email_verification_code": email_verification_code,
            "email_verification_code_timestamp": time.time()
        }
        print(new_user)

        # Check for existing verified email address
        if db.users.find_one({"email": new_user['email']}):
            return jsonify({"error": "Email adress is already in use, \nplease sign-in"}), 403

        # Enter new user in DB
        if db.users.insert_one(new_user):
            # Send email confirmation code
            Email().sendConfirmEmail(request.args.get('email'), email_verification_code)
            return jsonify({"status": "Account successfully created!"}), 200

        return jsonify({"error": "Signup failed."}), 400


    def signin(self):
        user = db.users.find_one({
            "email": request.args.get('email')
        })
        print(user)

        if (user['email_verified'] == False):
            return jsonify({"error": "You must verify you email address to login"}), 403

        if user and pbkdf2_sha256.verify(request.args.get('password'), user['password']):
            return jsonify({
                "username": user['username'],
                "email": user['email'],
                "status": "Successfully logged in!"
            }), 200
        return jsonify({"error": "The email or password you entered is incorrect"}), 400


    def verify_email(self, code):
        user = db.users.find_one({
            "email": request.args.get('email'),
        })
        # Email does not exists in DB
        if not user:
            return jsonify({"error": "Email adress is invalid"}), 400
        # Email verification code is wrong
        if code != user['email_verification_code']:
            return jsonify({"error": "Code is invalid"}), 400
        # Email verification code has expired (5 min)
        if time.time() - user["email_verification_code_timestamp"] > 300:
            return jsonify({"error": "Code has expired. Try again with a new one."}), 400

        # Verified!
        # We can now remove email verification related fields and set "email_verified" to True
        db.users.update_one(
            {"email": request.args.get('email')},
            {"$unset": {
                "email_verification_code": "",
                "email_verification_code_timestamp": ""
            }
        })
        db.users.update_one(
            {"email": request.args.get('email')},
            {"$set": {"email_verified": True}
        })
        return jsonify({"status": "Email successfully verified!"}), 200


    def send_new_code(self):
        user = db.users.find_one({
            "email": request.args.get('email'),
        })
        if not user:
            return jsonify({"error": "This email address is not linked to an account"}), 400
        email_verification_code = random_code(5)
        db.users.update_one(
            {"email": request.args.get('email')},
            {"$set": {
                "email_verification_code": email_verification_code,
                "email_verification_code_timestamp": time.time()
            }
        })
        Email().sendConfirmEmail(request.args.get('email'), email_verification_code)
        return jsonify({"status": "New code sent!"}), 200


    def reset_password(self):
        user = db.users.find_one({
            "email": request.args.get('email'),
        })

        if not user:
            return jsonify({"error": "This email address is not linked to an account"}), 400
        if pbkdf2_sha256.verify(request.args.get('newPassword'), user['password']):
            return jsonify({"error": "Your new password must be different from your previous password"}), 400
        db.users.update_one(
            {"email": request.args.get('email')},
            {"$set": {
                "password": pbkdf2_sha256.hash(request.args.get('newPassword'))
            }
        })
        return jsonify({"status": "Password successfully updated!"}), 200