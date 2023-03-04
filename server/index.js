const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());

//default path
app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.get("/test", (req, res) => {
  res.send("THIS IS AA");
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
