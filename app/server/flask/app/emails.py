from flask import render_template
from flask_mail import Message
from .app import mail


class Email:

  def sendConfirmEmail(self, recipients, email_confirmation_code):
    message = Message(sender="guillaume.vacelet@gmail.com", 
                      recipients=[recipients],
                      subject="Safecheck email confirmation",
                      html=render_template("email_confirmation.html", code=email_confirmation_code))
    mail.send(message)