const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/get", (req, res) => {
  res.send("GET request received");
  console.log("get request from client side");
});

app.post("/post", (req, res) => {
  console.log("Received POST data:", req.body);
  res.json({ message: "POST request received from client" });
});

app.listen(port, () => {
  console.log(`Express server is running on port ${port}`);
});
