from application import create_app
from application.api import create_api
# from OpenSSL import SSL

# context = SSL.Context(SSL.PROTOCOL_TLSv1_2)
# context.use_privatekey_file('server.key')
# context.use_certificate_file('server.crt')

app = create_app()
api = create_api(app)
api.init_app(app)

if __name__ == '__main__':
    app.run()
    # app.run(ssl_context=context)