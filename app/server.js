const express = require("express");

const app = express();
const PORT = 3000;

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" }
];

app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok"
  });
});

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`API running on port ${PORT}`);
});