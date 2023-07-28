const fs = require("fs");
const { Pool } = require("pg");
const path = require("path");
require("dotenv").config();
// PostgreSQL database configuration
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAM,
  password: process.env.DB_PASSWORD,
  port: 5432,
});

console.log(__dirname);
// Read the contents of the seed.sql file
const seedSQL = fs.readFileSync(__dirname + "/seed.sql").toString();

// Function to execute the seed SQL script
async function executeSeed() {
  try {
    await pool.query(seedSQL);
    console.log("Seed data executed successfully!");
  } catch (error) {
    console.error("Error executing seed data:", error.message);
  } finally {
    pool.end(); // Close the database connection
  }
}

// Call the function to execute the seed SQL script
executeSeed();
