require("dotenv").config();

module.exports = {
  port: process.env.PORT,
  secret: process.env.SECRET,
  url: process.env.MONGO_URL,
  github: {
    clientId: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRETS
  }
}