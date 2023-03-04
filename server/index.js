const express = require("express");
const mysql_connector = require("mysql");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());

const connection = mysql_connector.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "school-news",
});

connection.connect();

//default path
app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.get("/test", (req, res) => {
  res.send("Testing");
});

app.get("/getAllArticles", (req, res) => {
  connection.query(
    "SELECT articles.ID, Title, Copy, Image, UploadDateTime, LastName, FirstName, Email FROM `school-news`.articles inner join authors on articles.AuthorID = authors.ID;",
    function (error, results) {
      res.send(results);
    }
  );
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
