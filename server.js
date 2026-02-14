const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// This will let you serve files from the "public" folder
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello Marina! Your server is running.");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
