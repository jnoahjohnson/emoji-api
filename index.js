const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const emojis = ["🦄", "🌈", "✨", "👋", "🌎"];

app.get("/", (req, res) => {
  console.log(emojis);
  res.json({
    message: "🦄✨👋🌎🌈",
  });
});

app.get("/random", (req, res) => {
  res.json({
    message: emojis[Math.floor(Math.random() * emojis.length)],
  });
});

app.listen("3000", () => {});
