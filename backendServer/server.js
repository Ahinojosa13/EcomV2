const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON requests

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "ecomv2items",
});

db.connect((error) => {
  if (error) {
    console.log("Error connecting to the database: ", error);
  } else {
    console.log("Connected to the database");
  }
});

app.get("/gear", (req, res) => {
  db.query("SELECT * FROM ecomv2items", (error, results) => {
    if (error) {
      console.error("Error retrieving gear data: ", error);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(results);
    }
  });
});

app.get("/gear/catergory/:catergory", (req, res) => {
  const catergory = req.params.catergory;
  let query = "";

  if (catergory === "clothes" || catergory === "juice" || catergory === "gym gear" || catergory === "accessories") {
    query = `SELECT * FROM ecomv2items WHERE sort="${catergory}"`;
  } else {
    query = "SELECT * FROM ecomv2items"; // Return all products if category is not valid
  }

  db.query(query, (error, results) => {
    if (error) {
      console.error("Error retrieving gear data: ", error);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(results);
    }
  });
});

app.listen(8000, () => {
  console.log("Connected to backend");
});
