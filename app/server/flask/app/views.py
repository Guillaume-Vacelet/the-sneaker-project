from flask import render_template, request
from app.app import app


@app.route('/')
def home():
  return render_template('home.html')


@app.route('/dashboard/')
def dashboard():
  return render_template('dashboard.html')