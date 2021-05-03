from application import create_app
from application.api import create_api

app = create_app()
api = create_api(app)
api.init_app(app)

if __name__ == '__main__':
    app.run()