from application import app, db
import config

app.config.from_object(config.Test)
db.init_app(app)

if __name__ == '__main__':
    app.run()