from . import db

class Users(db.Model):
    __tablename__ = 'users'
    id = db.Column(
        db.Integer, 
        primary_key=True
    )
    username = db.Column(
        db.String(50), 
        unique=False, 
        nullable=False
    )
    password = db.Column(
        db.String(50), 
        nullable=False
    )
    email = db.Column(
        db.String(50), 
        unique=True, 
        nullable=False
    )
    email_confirmed = db.Column(
        db.Boolean, 
        nullable=True
    )
    salt = db.Column(
        db.String(50), 
        nullable=True
    )

    def serialize(self):
        return {
            'id': self.id,
            'username': self.username,
            'password': self.password,
            'email': self.email,
            'email_confirmed': self.email_confirmed,
            'salt': self.salt,
        }

    def __repr__(self):
        return '<User {}>'.format(self.username)

# class UserSneakers(db.Model):
#     __tablename__ = 'user_sneakers'
#     uuid = db.Column(
#         db.Integer, 
#         primary_key=True
#     )
#     user_id = db.Column(
#         db.Integer, 
#         db.ForeignKey('users.id')
#     )
#     model = db.Column(
#         db.String(30), 
#         db.ForeignKey('sneaker_catalog.model')
#     )

# class SneakerCatalog(db.Model):
#     __tablename__ = 'sneaker_catalog'
#     model = db.Column(
#         db.String(30), 
#         primary_key=True
#     )
#     brand_title = db.Column(
#         db.String(50),
#         db.ForeignKey('sneaker_brands.brand_title'),
#         nullable=False
#     )
#     color = db.Column(
#         db.String(10),
#         nullable=True
#     )
#     price = db.Column(
#         db.String(10),
#         nullable=True
#     )
#     image = db.Column(
#         db.String(50),
#         nullable=True
#     )

# class SneakerBrands(db.Model):
#     __tablename__ = 'sneaker_brands'
#     brand_title = db.Column(
#         db.String(30), 
#         primary_key=True
#     )
#     logo = db.Column(
#         db.String(30),
#         nullable=False
#     )

# class EmailConfirm(db.Model):
#     __tablename__ = 'email_confirm'
#     id = db.Column(
#         db.Integer, 
#         primary_key=True
#     )
#     user_id = db.Column(
#         db.Integer, 
#         db.ForeignKey('users.id')
#     )
#     uuid = db.Column(
#         db.Integer,
#     )

# class PasswordReset(db.Model):
    # __tablename__ = 'password_reset'
    # id = db.Column(
    #     db.Integer, 
    #     primary_key=True
    # )
    # user_id = db.Column(
    #     db.Integer, 
    #     db.ForeignKey('users.id')
    # )
    # random_seq = db.Column(
    #     db.String(30),
    # )
    # valid_until = db.Column(
    #     db.TIMESTAMP
    # )