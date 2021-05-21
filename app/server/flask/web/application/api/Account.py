from flask import jsonify
from flask_restful import reqparse, Resource
from application.models import db, Users

# parser = reqparse.RequestParser()
# parser.add_argument('username', required=False)
# parser.add_argument('password', required=False)
# parser.add_argument('email', required=True)

class AccountDelete(Resource):
  def delete(self):
    parser = reqparse.RequestParser()
    parser.add_argument('email', required=True)
    args = parser.parse_args()
    user = Users.query.filter_by(email=args['email']).first_or_404(
      description='{} user does not exist.'.format(args['email'])
    )
    db.session.delete(user)
    db.session.commit()
    return '{} user has been deleted.'.format(args['email']), 204, {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods' : 'DELETE'}

class AccountRegister(Resource):
  def post(self):
    parser = reqparse.RequestParser()
    parser.add_argument('username', required=True)
    parser.add_argument('password', required=True)
    parser.add_argument('email', required=True)
    args = parser.parse_args()
    if (Users.query.filter_by(email=args['email']).first()):
      return 'User with {} email adress already exists.'.format(args['email']), 400
    new_user = Users(
      username=args['username'],
      password=args['password'],
      email=args['email'],
      email_confirmed=False,
      salt='salt'
    )
    db.session.add(new_user)
    db.session.commit()
    return Users.serialize(new_user), 201, {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods' : 'POST'}

class AccountLogin(Resource):
  def post(self):
    parser = reqparse.RequestParser()
    parser.add_argument('email', required=True)
    parser.add_argument('password', required=True)
    args = parser.parse_args()
    user = Users.query.filter_by(email=args['email']).first_or_404(
      description='User with email={} does not exist.'.format(args['email'])
    )
    if user.password != args['password']:
      return 'Bad password for {}'.format(args['email']), 400
    return Users.serialize(user), 200, {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods' : 'POST'}