from app.app import app
import os

if __name__ == "__main__":
  port = int(os.environ.get('PORT'))
  app.run(host='0.0.0.0', port=port)