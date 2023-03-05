const express = require("express");
const dotenv = require("dotenv");

// Load env vars
dotenv.config();

// Initialize express
const app = express();

app.use((req, res, next) => {
  next();
});

app.get("/", (req, res) => {
  res.status(200).setHeader("Content-Type", "text/plain").send("Hello 👋");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
