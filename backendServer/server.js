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
  db.query("SELECT * FROM gear", (error, results) => {
    if (error) {
      console.error("Error retrieving gear data: ", error);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(results);
    }
  });
});

app.get("/gear/category/:category", (req, res) => {
  const category = req.params.category
  db.query(`SELECT * FROM gear WHERE catergory="${category}"`, (error, results) => {
    if (error) {
      console.error("Error retrieving gear data: ", error);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(results);
    }
  });
});

// app.get("/gear/catergory/juice", (req, res) => {
//   db.query("SELECT * FROM gear WHERE catorgory LIKE '%juice%'", (error, results) => {
//     if (error) {
//       console.error("Error retrieving gear data: ", error);
//       res.status(500).json({ error: "Internal server error" });
//     } else {
//       res.json(results);
//     }
//   });
// });
// app.get("/gear/catergory/gymgear", (req, res) => {
//   db.query("SELECT * FROM gear WHERE catorgory LIKE '%gym gear%'", (error, results) => {
//     if (error) {
//       console.error("Error retrieving gear data: ", error);
//       res.status(500).json({ error: "Internal server error" });
//     } else {
//       res.json(results);
//     }
//   });
// });
// app.get("/gear/catergory/accessories", (req, res) => {
//   db.query("SELECT * FROM gear WHERE catorgory LIKE '%accessories%'", (error, results) => {
//     if (error) {
//       console.error("Error retrieving gear data: ", error);
//       res.status(500).json({ error: "Internal server error" });
//     } else {
//       res.json(results);
//     }
//   });
// });
// app.get("/gear/catergory/clothes", (req, res) => {
//   db.query("SELECT * FROM gear WHERE catorgory LIKE '%clothes%", (error, results) => {
//     if (error) {
//       console.error("Error retrieving gear data: ", error);
//       res.status(500).json({ error: "Internal server error" });
//     } else {
//       res.json(results);
//     }
//   });
// });
app.listen(8000, () => {
  console.log("Connected to backend");
});
