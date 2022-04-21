const express = require("express");
const app = express();
const port = 639;
app.listen(port, () => {
  console.log("your server is running on port: 639");
});

app.get("/chocolate", (req, res) => {
  const { amount } = req.query;
  res.send(`chocolate amount is: ${amount}`);
});

app.get("/multiply", (req, res) => {
  const { value1, value2 } = req.query;
  res.send(`the multiply is ${value1 * value2}`);
});

