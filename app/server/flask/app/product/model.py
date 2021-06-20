from flask import Flask, jsonify, request
from app.app import db

class Product:
  
  def add(userid):
    user = db.users.find_one({"_id": userid})

    if not user:
        return jsonify({"error": "Can't find user"}), 400
    db.users.update_one(
        {"_id" : userid},
        {"$push": {
          "products": ''
        }
    })
    return jsonify({"status": "Email successfully verified!"}), 200

