from flask import session, redirect, url_for, escape, request, render_template
from . import app
from .models import Users

#################################################################
@app.route('/', methods=['GET', 'POST'])
def index():
    if 'username' in session:
        return 'Logged in as %s' % escape(session['username'])
    if request.method == 'POST':
        return redirect(url_for('login'))
    return render_template('index_view.html')

# @app.route('/login', methods=['GET', 'POST'])
# def login():
#     if request.method == 'POST':
#         session['username'] = request.form['username']
#         return redirect(url_for('index'))
#     return render_template('login_view.html')

# @app.route('/logout')
# def logout():
#     session.pop('username', None)
#     return redirect(url_for('index'))
##################################################################
@app.route('/user', methods=['GET', 'POST'])
def user():
    if request.method == 'POST':
        newUser = models.Users(pseudo=data['pseudo'],
        password=data['password'],
        user_num=data['user_num'],
        email=data['email'])
        db.add(newUser)
        db.commit()
    users = Users.query.all()
    return render_template('users.html', users=users)

@app.route('/create', methods=['POST'])
def create():
    data = request.json
    if not data:
        return "probelm with data", 400
    else:
        try: 
            newUser = models.Users(pseudo=data['pseudo'],
            password=data['password'],
            email=data['email'],
            user_num=data['user_num']
            )
            db.add(newUser)
            db.commit()
        except Exception as e:
            print(e)
            
@app.route('/read/<product_id>', methods=['GET'])
def read(user_id):
    user = Users.query.get_or_404(product_id)
    response = {
            "pseudo": product.pseudo,
            "password": product.password,
            "email": product.email,
            "user_num": user.user_num
        }
    return {"message": "success", "user": response}

@app.route('/update/<product_id>', methods=['PUT'])
def update(user_num):
    user = Users.query.get_or_404(product_id)
    data = request.get_json()
    user.pseudo = data['pseudo']
    user.password = data['password']
    user.email = data['email']
    user.user_num = data['user_num']
    db.session.add(user)
    db.session.commit()
    return {"message": f"user {user.pseudo} successfully updated"}

@app.route('/delete/<product_id>', methods=['DELETE'])
def delete(user):
    user = Users.query.get_or_404(user)
    db.session.delete(user)
    db.session.commit()
    return {"message": f"user {user.name} successfully deleted."}