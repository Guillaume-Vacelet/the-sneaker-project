FROM mongo

RUN mkdir -p data/db
COPY ./init-db.js /docker-entrypoint-initdb.d/init-db.js

WORKDIR /data

ENV MONGO_INITDB_DATABASE=safechek-db
ENV MONGO_INITDB_ROOT_USERNAME=root
ENV MONGO_INITDB_ROOT_PASSWORD=pwd
ENV PORT=27017

EXPOSE 27017

CMD ["mongod"]