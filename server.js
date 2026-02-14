const express = require("express");
const app = express();

// This will let you serve files from the "public" folder
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello Marina! Your server is running.");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
