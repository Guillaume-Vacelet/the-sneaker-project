FROM python:3.7

RUN apt-get update
RUN apt-get install apt-utils -y \
    && apt install libpq-dev -y \
    && apt install postgresql-client -y \
    && apt install postgresql-client-common -y

WORKDIR /app

# ENV FLASK_APP=run.py
# ENV FLASK_RUN_HOST=0.0.0.0

RUN pip install --upgrade pip
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

EXPOSE 5000

COPY . .
# CMD ["flask", "run"]