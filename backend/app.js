const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8000;
const db = new sqlite3.Database(":memory:");

app.use(cors());

db.serialize(() => {
  db.run("CREATE TABLE logs (jiraId INT, miroTag TEXT)");

  // const stmt = db.prepare("INSERT INTO logs VALUES (?, ?)");
  // for (let i = 0; i < 10; i++) {
  //   stmt.run(i, `User${i}`);
  // }
  // stmt.finalize();
});

app.get("/", (req, res) => {
  db.all("SELECT id, name FROM users", [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

app.get("/getBacklog/:url/:apiKey", (req, res) => {
  console.log(req.params.url, req.params.url.match("[^.]+(?=\\.atlassian)")[0]);
  fetch(
    `https://${req.params.url}/rest/api/2/search?jql=project=${req.params.url.match("[^.]+(?=\\.atlassian)")[0]}&maxResults=1000`,
    {
      method: "GET",
      headers: {
        Authorization: `Basic ${req.params.apiKey}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    },
  )
    .then((response) => {
      console.log(`Response: ${response.status} ${response.statusText}`);
      return response.text();
    })
    .then((text) => {
      res.json({
        message: "success",
        data: text,
      });
    })
    .catch((err) => console.error(err));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
