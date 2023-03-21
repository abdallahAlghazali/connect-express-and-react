const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Use CORS middleware
app.use(cors());

app.post("/submit-data", (req, res) => {
  // Do something with the data received from the frontend
  const data = req.body;
  console.log(data);

  // Send a response back to the frontend
  res.send("Data received");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
