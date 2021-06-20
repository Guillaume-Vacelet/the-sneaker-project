from flask import Flask, jsonify
from app.app import app, db
from .model import Product

@app.route('/product/add/<userid>', methods=['POST'])
def add_product():
  return Product.add()