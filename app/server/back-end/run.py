from flask import Flask
from flask_restful import Resource, Api
from application import api, app
from API import login, sign_up

api.add_resource(sign_up, '/sign_up')
api.add_resource(login, '/login')

if __name__ == '__main__':
    app.run(debug = True)