const express = require("express");
const app = express();
const pool = require("./db/db");
const port = 3000;
const api_film_router = require("./routes/api_film");

const notFound = require("./middleware/error-handler");
require("dotenv").config();

app.use("/api/films", api_film_router);
app.use(notFound);
pool
  .connect()
  .then(() => {
    console.log("Connected to PostgreSQL");
    app.listen(3000, (req, res) =>
      console.log(`Server is listening on port ${port}`)
    );
  })
  .catch((error) => {
    console.error("Error connecting to PostgreSQL:", error.message);
  });
