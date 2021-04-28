import os

class Test (object):
    PORT = '5000'
    DEBUG = True
    HOST = '0.0.0.0'
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'A0Zr98j/3yX R~XHH!jmN]LWX/,?RT'
    SERVER_NAME = os.environ.get('SERVER_NAME') or ':'.join([HOST, PORT])
    POSTGRES = {
    'user': 'admin',
    'pw': 'password',
    'db': 'testdb',
    'host': 'db',
    'port': '5432',
    }
    SQLALCHEMY_DATABASE_URI = 'postgresql://admin:password@db/testdb'