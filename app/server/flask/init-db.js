db = db.getSiblingDB("safecheck-db")
db.users.drop()

db.users.insertOne(
  {
    username: "robert",
    email: "robert@gmail.com",
    password: "itsrobert"
  }
)