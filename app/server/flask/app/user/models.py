from flask import Flask, jsonify, request
from passlib.hash import pbkdf2_sha256
from app.app import db
from app.emails import Email
from app.utils import random_code
import time
import uuid


class User:

    def signup(self):
        # Create the user object
        email_verification_code = random_code(5)
        new_user = {
            "_id": uuid.uuid4().hex,
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
        existing_user = db.users.find_one({"email": new_user['email']})
        if existing_user:
            # User exists and is fully registered
            if existing_user['email_verified'] == True:
                return jsonify({"error": "Email adress is already in use."}), 400
            # User exists but has not verified email
            else:
                db.users.update_one(
                    {"email": request.args.get('email')},
                    {"$set": {
                        "username": new_user['username'],
                        "password": new_user['password'],
                        "email_verification_code": new_user['email_verification_code'],
                        "email_verification_code_timestamp": new_user['email_verification_code_timestamp']
                    }}
                )
                Email().sendConfirmEmail(request.args.get('email'), email_verification_code)
                return jsonify({"msg": "Account successfully created!"}), 200

        # Enter new user in DB
        if db.users.insert_one(new_user):
            # Send email confirmation code
            Email().sendConfirmEmail(request.args.get('email'), email_verification_code)
            return jsonify({"msg": "Account successfully created!"}), 200

        return jsonify({"error": "Signup failed."}), 400

    def signin(self):
        user = db.users.find_one({
            "email": request.args.get('email')
        })
        print(user)

        if (user['email_verified'] == False):
            return jsonify({"error": "Account does not exist"}), 400

        if user and pbkdf2_sha256.verify(request.args.get('password'), user['password']):
            return jsonify({"msg": "Successfully logged in!"}), 200
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
        return jsonify({"msg": "Email successfully verified. You can now login!"}), 200
