from flask import Flask
from flask_sqlalchemy import SQLAlchemy
# from flask_cors import CORS
from flask_migrate import Migrate

db = SQLAlchemy()
migrate = Migrate()

def create_app():
    #flask
    app = Flask(__name__)
    app.config.from_object('config.Config')

    #flask-cors
    # cors = CORS(app,  resources={r"/api/*": {"origins": "*"}})

    #flask-sqlalchemy
    db.init_app(app)

    # flask-migrate
    migrate.init_app(app, db)

    with app.app_context():
        # from . import views
        from . import models

        db.create_all()
        return app