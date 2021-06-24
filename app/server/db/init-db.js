db = db.getSiblingDB("safecheck-db")
// db.users.drop()

db.users.insertOne(
  {
    username: "",
    email: "",
    password: "",
    emailVerified: true,
  }
)