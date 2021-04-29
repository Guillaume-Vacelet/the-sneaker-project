from flask_restful import Resource, Api
from flask import session, request, render_template
from ../db/models import Users 

class sign_up(Resource):
    def post(self):
        data = request.json
        if not data:
            return 'problem with data', 400
        else:
            try:
                newUser = Users(pseudo=data['pseudo'],
                password = data['password'],
                email = data['email'])
                db.add(newUser)
                db.commit()
        user_query = Users.query.all()
        return render_template('product.html', user_query = user_query)

class log_in(Resource):
    def get(self):
        return