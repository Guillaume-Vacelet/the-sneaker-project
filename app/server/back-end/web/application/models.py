from . import db
from sqlalchemy.dialects.postgresql import JSON

class Users(db.Model):
    __tablename__ = 'Users'
    user_num = db.Column(db.Integer, primary_key=True)
    pseudo = db.Column(db.String(50))
    password = db.Column(db.String(50))
    email = db.Column(db.String(50))
    #salt = db.Column(db.String(50))

    def __init__(self, newPseudo, newPassword, newEmail, newUserid):
        #id = db.column(db.Integer, primary_key = True)
        self.user_id = newUserid
        self.pseudo = newPseudo
        self.password = newPassword
        self.email = newEmail


