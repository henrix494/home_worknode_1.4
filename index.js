const express = require("express");
const enRoute = require("./routes/enctypt/enRoute");
const deRoute = require("./routes/decrypt/deRoute");
const sendJoke = require("./routes/joke/jRoute");
const app = express();
const port = 3001;

app.listen(port, () => {
  console.log(`server is lisisng on port ${port}`);
});

app.get("/enctypt", enRoute);
app.get("/dectypt", deRoute);
app.get("/joke", sendJoke);
