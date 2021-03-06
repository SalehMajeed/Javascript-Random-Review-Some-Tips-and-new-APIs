const express = require("express");
const chance = require("chance").Chance();
const shuffle_array = require("shuffle-array");

const app = express();

const data = {
  headers: ["Name", "Age", "Profession", "Country"],
  rows: new Array(10).fill(undefined).map(() => {
    return [
      chance.name(),
      chance.age(),
      chance.profession(),
      chance.country({ full: true }),
    ];
  }),
};

app.use(express.static("public"));

app.get("/data", (req, res) => {
  res.json({
    header: data.headers,
    rows: shuffle_array(data.rows),
    lastUpdate: new Date().toISOString(),
  });
});

app.listen(3001, () => console.log("runnig"));
