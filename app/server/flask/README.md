# SAFECHECK FLASK APP

This is the back-end application of the SafeCheck project.

It has 3 parts :
- :gear: Flask application, which links the two other parts and gives an API for the front-end.
- :brain: AI module
- :file_cabinet: MongoDB database

## Installs



1 - Launch MongoDB
  
  > mongod --dbpath ./data/db

1.2 - You can now launch MongoDB Compass

2 - Launch Flask app

  > ./run