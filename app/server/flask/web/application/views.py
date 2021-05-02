from flask import session, redirect, url_for, escape, request, render_template
from flask import current_app as app
from .models import db, Users#, UserSneakers, SneakerCatalog, SneakerBrands, EmailConfirm, PasswordReset


@app.errorhandler(404)
def pageNotFound():
    return render_template('page_not_found.html'), 404

@app.route('/', methods=['GET', 'POST'])
def backendApp():
    return redirect('/tables')


@app.route('/api', methods=['GET', 'POST'])
def api():
    return render_template('api.html'), 200


########################################
#               TABLES                 #
########################################

@app.route('/tables', methods=['GET'])
def get_tables():
    # db.engine.table_names()
    # tables = db.metadata.tables.items()

    tables = [
        { 'title': "users", 'to': "/tables/users", 'description': 'All users'},
        { 'title': "user_sneakers", 'to': "/tables/user_sneaker", 'description': 'All users sneakers' },
        { 'title': "sneaker_catalog", 'to': "/tables/sneaker_catalog", 'description': 'All sneakers' },
        { 'title': "sneaker_brands", 'to': "/tables/sneaker_brands", 'description': 'All sneaker brands' },
        { 'title': "email_confirm", 'to': "/tables/email_confirm", 'description': 'Unique id for email confirmation' },
        { 'title': "password_reset", 'to': "/tables/password_reset", 'description': 'Informations for password reset' },
    ]
    return render_template('tables/tables.html', tables=tables), 200

@app.route('/tables/users', methods=['GET'])
def get_users():
    users_dict = []
    for user in Users.query.all():
        users_dict.append(dict((col, getattr(user, col)) for col in user.__table__.columns.keys()))
    return render_template('tables/table.html', table_name='Users', data=users_dict), 200

@app.route('/account/login', methods=['POST'])
def login_user():
    email = request.args.get('email')
    password = request.args.get('password')
    if (not email) or (not password):
        return make_response(f"Error: User login failed: Missing data."), 400
    user = Users.query.filter(Users.email == email).first()
    if not user:
      return make_response(f'Error: User login failed: User does not exist.'), 400
    return make_response(user), 200

@app.route('/account/register', methods=['POST'])
def register_new_user():
    username = request.args.get('username')
    password = request.args.get('password')
    email = request.args.get('email')

    if (not username) or (not password) or (not email):
        return make_response(f"Error: User creation failed: Missing data."), 400
    is_existing_email = Users.query.filter(Users.email == email).first()
    if is_existing_email:
      return make_response(f'Error: User creation failed: Email adress [{email}] is already registered.'), 400
    new_user = Users(
        username=username,
        password=password,
        email=email,
        email_confirmed=False,
        salt='salt',
    )
    db.session.add(new_user)
    db.session.commit()
    return make_response(f"User [{username}] successfully registered!"), 200

@app.route('/account/delete', methods=['GET', 'DELETE'])
def delete_user():
  user_id = request.args.get('id')
  if not user_id:
    return make_response(f"Error: User deletion failed: User not found."), 400
  Users.query.filter(Users.id == user_id).delete()
  db.session.commit()
  return make_response(f"User [{user_id}] successfully deleted."), 200

# @app.route('/tables/user_sneakers', methods=['GET', 'POST'])
# def usersSneakersTable():
#     return render_template('tables/user_sneakers.html')

# @app.route('/tables/sneaker_catalog', methods=['GET', 'POST'])
# def sneakerCatalogTable():
#     return render_template('tables/sneaker_catalog.html')

# @app.route('/tables/sneaker_brands', methods=['GET', 'POST'])
# def sneakerBrandsTable():
#     return render_template('tables/sneaker_brands.html')

# @app.route('/tables/email_confirm', methods=['GET', 'POST'])
# def emailConfirmTable():
#     return render_template('tables/email_confirm.html')

# @app.route('/tables/password_reset', methods=['GET', 'POST'])
# def passwordResetTable():
#     return render_template('tables/password_reset.html')









# @app.route('/', methods=['GET', 'POST'])
# def user():
#     if request.method == 'POST':
#         newUser = models.Users(pseudo=data['pseudo'],
#         password=data['password'],
#         user_num=data['user_num'],
#         email=data['email'])
#         db.add(newUser)
#         db.commit()
#     users = Users.query.all()
#     return render_template('tables/users.html', users=users)

# @app.route('/create', methods=['POST'])
# def create():
#     data = request.json
#     if not data:
#         return "probelm with data", 400
#     else:
#         try: 
#             newUser = models.Users(pseudo=data['pseudo'],
#             password=data['password'],
#             email=data['email'],
#             user_num=data['user_num']
#             )
#             db.add(newUser)
#             db.commit()
#         except Exception as e:
#             print(e)
            
# @app.route('/read/<product_id>', methods=['GET'])
# def read(user_id):
#     user = Users.query.get_or_404(product_id)
#     response = {
#             "pseudo": product.pseudo,
#             "password": product.password,
#             "email": product.email,
#             "user_num": user.user_num
#         }
#     return {"message": "success", "user": response}

# @app.route('/update/<product_id>', methods=['PUT'])
# def update(user_num):
#     user = Users.query.get_or_404(product_id)
#     data = request.get_json()
#     user.pseudo = data['pseudo']
#     user.password = data['password']
#     user.email = data['email']
#     user.user_num = data['user_num']
#     db.session.add(user)
#     db.session.commit()
#     return {"message": f"user {user.pseudo} successfully updated"}

# @app.route('/delete/<product_id>', methods=['DELETE'])
# def delete(user):
#     user = Users.query.get_or_404(user)
#     db.session.delete(user)
#     db.session.commit()
#     return {"message": f"user {user.name} successfully deleted."}





#################################################################
# @app.route('/', methods=['GET', 'POST'])
# def index():
#     if 'username' in session:
#         return 'Logged in as %s' % escape(session['username'])
#     if request.method == 'POST':
#         return redirect(url_for('login'))
#     return render_template('index_view.html')

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