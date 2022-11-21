const { text } = require('express')

require('dotenv').config()

module.exports = {
  "development": {
    "username": process.env.DBUSER,
    "password": process.env.DBPASS,
    "database": process.env.DBNAME,
    "host": process.env.DBHOST,
    "dialect": "postgres"
  },
}
