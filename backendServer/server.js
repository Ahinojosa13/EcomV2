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
    database: "mysql",

});

db.connect((error) => {
  if (error) {
    console.log("Error connecting to the database: ", error);
  } else {
    console.log("Connected to the database");
  }
});
app.get("/gear", (req, res) => {
    db.query("SELECT * FROM gear", (error, results) => {
      if (error) {
        console.error("Error retriving gear data: ", error);
        res.status(500).json({ error: "Internal server error" });
      } else {
        res.json(results);
      }
    });
  });
  app.get("/carsid", (req, res) => {
    const carIds = [1, 3, 5, 6, 8];
  
    db.query(
      `SELECT * FROM gear WHERE gear_id IN (${gearIds.join(",")})`,
      (error, results) => {
        if (error) {
          console.error("Error retrieving gear data: ", error);
          res.status(500).json({ error: "Internal server error" });
        } else {
          res.json(results);
        }
      }
    );
  });
app.listen(8000, () => {
    console.log("Connected to backend");
  });