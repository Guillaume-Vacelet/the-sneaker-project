from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
app.secret_key = b'\x9e\xc8\x12\xb9\x1cW\x98\xe4\x17@\xf5\x9e\x86\x0c\x1a\x92'

# CORS
CORS(app)
cors = CORS(app, resource={
  r"/*":{
      "origins":"*"
  }
})
app.config['CORS_HEADERS'] = 'Content-Type'

# Database
import pymongo
client = pymongo.MongoClient('localhost', 27017)
db = client['safecheck-db']

# Routes
from .user import routes
from . import views