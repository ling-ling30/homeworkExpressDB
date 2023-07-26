const { pg, Pool } = require("pg");
require("dotenv").config();
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const dbConfig = {
  user: dbUser, //postgres
  password: dbPassword, //postgres
  host: dbHost, //localhost
  port: 5432, // Default PostgreSQL port is 5432
  database: "dvd",
};

const pool = new Pool(dbConfig);

module.exports = pool;
