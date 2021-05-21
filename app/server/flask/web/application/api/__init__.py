from flask_restful import Api
from application.api.Accounts import Accounts
from application.api.Account import AccountDelete, AccountLogin, AccountRegister

def create_api(app):
  api = Api(app)
  api.add_resource(AccountDelete, '/account/delete')
  api.add_resource(AccountRegister, '/account/register')
  api.add_resource(AccountLogin, '/account/login')
  api.add_resource(Accounts, '/accounts')
  return api