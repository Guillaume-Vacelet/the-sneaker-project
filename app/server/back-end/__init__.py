from flask import Flask
from flask_restgul import Resource, Api

app = Flask(__name__)
api = Api(app)