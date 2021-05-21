from flask import jsonify
from flask_restful import reqparse, Resource
from application.models import db, Users

parser = reqparse.RequestParser()
parser.add_argument('username', required=True)
parser.add_argument('password', required=True)
parser.add_argument('email', required=True)

class Accounts(Resource):
  def get(self):
    users = Users.query.all()
    return [Users.serialize(user) for user in users]

  # def post(self):
  #   args = parser.parse_args()
  #   new_user = Users(
  #     username=args['username'],
  #     password=args['password'],
  #     email=args['email']
  #   )
  #   db.session.add(new_user)
  #   db.session.commit()
  #   return Users.serialize(new_user), 201
