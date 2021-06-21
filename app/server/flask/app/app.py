from flask import Flask
# from flask_cors import CORS
from flask_mail import Mail, Message

app = Flask(__name__)
app.secret_key = b'\x9e\xc8\x12\xb9\x1cW\x98\xe4\x17@\xf5\x9e\x86\x0c\x1a\x92'
# app.config['CORS_HEADERS'] = 'Content-Type'
app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'safecheckapp@gmail.com'
app.config['MAIL_PASSWORD'] = 'BC9qqF7z!fU1'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True

# CORS
# CORS(app)
# cors = CORS(app, resource={
#   r"/*":{
#       "origins":"*"
#   }
# })

# Mail
mail = Mail(app)


# Database
from pymongo import MongoClient
MONGO_HOST = "mongo" 
MONGO_PORT = "27017"
MONGO_DB = "safecheck-db"
MONGO_USER = "root"
MONGO_PASS = "pwd"
client = MongoClient("mongodb://{}:{}@{}:{}/{}?authSource=admin".format(
  MONGO_USER, 
  MONGO_PASS, 
  MONGO_HOST, 
  MONGO_PORT, 
  MONGO_DB
))
db = client['safecheck-db']
# Set index to automatically delete user if email_verified==False for 24h
# db.users.create_index(
#     "creation_date", 
#     expireAfterSeconds=86400, 
#     partialFilterExpression={"email_verified": False}
# )

# Routes
from .user import routes
from . import views