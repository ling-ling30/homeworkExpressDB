const { pg, Pool } = require("pg");
require("dotenv").config();
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;

const dbConfig = {
  user: dbUser,
  password: dbPassword,
  host: dbHost,
  port: 5432, // Default PostgreSQL port is 5432
  database: dbName,
};

const pool = new Pool(dbConfig);

module.exports = pool;
