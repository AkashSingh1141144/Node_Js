const express = require("express");

const app = express();

const PORT = 8000;
const HOSTNAME = "localhost";

app.get("/", (req, res) => {
  res.send("<h1>Hi Sandhya ! </h1>");
});
app.get("/about", (req, res) => {
  res.send("About Sandhya");
});
app.get("/contact", (req, res) => {
  res.send("Contact with Sandhya");
});
app.get("/relation", (req, res) => {
  res.send("My Gf Sandhya");
});
app.listen(PORT, () => {
  console.log(`Server running on ${HOSTNAME}:${PORT}`);
});
