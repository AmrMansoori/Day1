import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// CRUD -> Server is setp up to do these things

// GET(READ), POST(CREATE), PUT(UPDATE), DELETE
app.get("/", (req, res) => {
  res.send("wlcome to the server - GET");
});
app.post("/", (req, res) => {
  res.send("welcome to the server - POST");
});
app.put("/", (req, res) => {
  res.send("welcome to the server - PUT");
});
app.delete("/", (req, res) => {
  res.send("welcome to the server - DELETE");
});

app.get("/search", (req, res) => {
  console.log(req.url);
  console.log(req.headers);
  console.log(req.query);
  console.log(req.params);
  console.log(req.body);
  res.send("You came to the /search route");
});

app.get("/item/:itemID", (req, res) => {
  console.log(req.url);
  console.log(req.headers);
  console.log(req.query);
  console.log(req.params);
  console.log(req.body);
  res.send("You came to the /item route");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
