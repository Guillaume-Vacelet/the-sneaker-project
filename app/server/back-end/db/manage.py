from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_script import Manager
from flask_migrate import Migrate, Migrate
from . import db
import app
from . import config

app.config.from_object(config.Test)
db.init_app(app)

migrate = Migrate(app, db)

manager(app)
manager.add_command('db', MigrateCommand)

if __name__ == '__main__':
    manager.run()