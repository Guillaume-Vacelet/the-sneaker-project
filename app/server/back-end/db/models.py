from application import db
from sqlalchemy.dialects.postgresql import JSON

class Users(db.Model):
    __tablename__ = 'Users'
    pseudo = db.Column(db.String(128))
    password = db.Column(db.String(128))
    email = db.Column(db.String(128))

    def __init__(self, newPseudo, newPassword, newEmail):
        id = db.column(db.Integer, primary_key = True)
        self.pseudo = newPseudo
        self.password = newPassword
        self.email = newEmail


