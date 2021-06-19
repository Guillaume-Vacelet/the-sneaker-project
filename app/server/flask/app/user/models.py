from flask import Flask, jsonify, request
from passlib.hash import pbkdf2_sha256
from app.app import db
from app.emails import Email
from app.utils import random_code
import time
import uuid
import datetime
from bson.objectid import ObjectId


class User:

    def signup(self):
        # Create the user object
        email_verification_code = random_code(5)
        # new_user_uuid = uuid.uuid4().hex
        new_user_uuid = str(ObjectId())
        new_user = {
            "_id": new_user_uuid,
            'creation_date': datetime.datetime.utcnow(),
            "username": request.args.get('username'),
            "email": request.args.get('email'),
            "password": pbkdf2_sha256.hash(request.args.get('password')),
            "email_verified": False,
            "email_verification_code": email_verification_code,
            "email_verification_code_timestamp": time.time(),
            "products": [],
            "profile_picture": '',
        }
        print(new_user)

        # Check for existing verified email address
        if db.users.find_one({"email": new_user['email']}):
            return jsonify({"error": "Email adress is already in use, \nplease sign-in"}), 403

        # Enter new user in DB
        if db.users.insert_one(new_user):
            # Send email confirmation code
            Email().sendConfirmEmail(request.args.get('email'), email_verification_code)
            return jsonify({
                "status": "Account successfully created!",
                "userid": new_user_uuid
            }), 200

        return jsonify({"error": "Signup failed."}), 400


    def signin(self):
        user = db.users.find_one({"email": request.args.get('email')})
        print(user)

        if not user:
            return jsonify({"error": "The email or password you entered is incorrect"}), 400

        if (user['email_verified'] == False):
            return jsonify({
                "error": "You must verify you email address to login",
                "userid": user['_id']
            }), 403

        if user and pbkdf2_sha256.verify(request.args.get('password'), user['password']):
            return jsonify({
                "user": {
                    "userid": user['_id'],
                    "username": user['username'],
                    "email": user['email'],
                    "products": user['products'],
                },
                "status": "Successfully logged in!"
            }), 200
        return jsonify({"error": "The email or password you entered is incorrect"}), 400


    def verify_email(self, code):
        user = db.users.find_one({"_id" : request.args.get('userid')})

        # Email does not exists in DB
        if not user:
            return jsonify({"error": "Can't find user"}), 400
        # Email verification code is wrong
        if code != user['email_verification_code']:
            return jsonify({"error": "Code is invalid"}), 400
        # Email verification code has expired (5 min)
        if time.time() - user["email_verification_code_timestamp"] > 300:
            return jsonify({"error": "Code has expired. Try again with a new one."}), 400

        # Verified!
        # We can now remove email verification related fields and set "email_verified" to True
        db.users.update_one(
            {"_id" : request.args.get('userid')},
            {"$unset": {
                "email_verification_code": "",
                "email_verification_code_timestamp": ""
            }
        })
        db.users.update_one(
            {"_id" : request.args.get('userid')},
            {"$set": {"email_verified": True}
        })
        return jsonify({"status": "Email successfully verified!"}), 200


    def send_code(self):
        email = request.args.get('email')
        if not email:
            return jsonify({"error": "Email address missing"}), 400
        userid = request.args.get('userid')

        if userid:
            user = db.users.find_one({"_id" : userid})
        else:
            user = db.users.find_one({"email" : email})

        if not user:
            return jsonify({"error": "Can't find user"}), 400

        email_verification_code = random_code(5)

        if userid:
            db.users.update_one(
                {"_id" : userid},
                {"$set": {
                    "email_verification_code": email_verification_code,
                    "email_verification_code_timestamp": time.time()
                }
            })
        else:
            db.users.update_one(
                {"email" : email},
                {"$set": {
                    "email_verification_code": email_verification_code,
                    "email_verification_code_timestamp": time.time()
                }
            })
        
        Email().sendConfirmEmail(request.args.get('email'), email_verification_code)
        return jsonify({
            "status": "Email verification code sent!",
            "userid": user['_id']
        }), 200


    def reset_password(self):
        user = db.users.find_one({"_id" : request.args.get('userid')})

        if not user:
            return jsonify({"error": "Can't find user"}), 400
        if pbkdf2_sha256.verify(request.args.get('newPassword'), user['password']):
            return jsonify({"error": "Your new password must be different from your previous password"}), 400
        db.users.update_one(
            {"_id": request.args.get('userid')},
            {"$set": {
                "password": pbkdf2_sha256.hash(request.args.get('newPassword'))
            }
        })
        return jsonify({"status": "Password successfully updated!"}), 200


    def update(self):
        user = db.users.find_one({"_id" : request.args.get('userid')})

        if not user:
            return jsonify({"error": "Can't find user"}), 400
        
        new_username = request.args.get('newusername')
        new_email = request.args.get('newemail')
        updated = {}
        if not new_username and not new_email:
            return jsonify({"error": "Can't update user informations because no value was given"}), 400
        if new_username:
            updated['username'] = new_username
        if new_email:
            if db.users.find_one({"email": new_email}):
                return jsonify({"error": "Email adress is already in use"}), 400
            updated['email'] = new_email
        db.users.update_one(
            {"_id" : request.args.get('userid')},
            {"$set": updated
        })
        return jsonify({
            "status": "User informations successfully updated",
            "user" : db.users.find_one({"_id" : request.args.get('userid')})
        }), 200