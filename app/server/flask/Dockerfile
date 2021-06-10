FROM python:alpine3.7

COPY . /app
WORKDIR /app

ENV FLASK_APP=wsgi.py
ENV FLASK_ENV=development
ENV FLASK_RUN_HOST=0.0.0.0

RUN pip install -r requirements.txt
EXPOSE 5000

# ENTRYPOINT [ "python" ]
# CMD [ "wsgi.py" ]
CMD ["flask", "run"]