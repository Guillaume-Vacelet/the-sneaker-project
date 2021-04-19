from application import db
from sqlalchemy.dialects.postgresql import JSON

class Users(db.Model):
    __tablename__ = 'Users'
    first_name = db.Column(db.String(128))
    family_name = db.Column(db.String(128))
    password = db.Column(db.String(128))
    email = db.Column(db.String(128))
