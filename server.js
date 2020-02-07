const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  // response.send("hey");
  response.sendFile(__dirname + "/app/index.html");
});

// app.listen(PORT, () => {
//   console.log(`Server at ${PORT}`);
// });

const listener = app.listen(PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
