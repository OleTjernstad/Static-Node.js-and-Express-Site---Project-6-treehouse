const express = require("express");

const routes = require("./src/routes");

const app = express();

app.set("view engine", "pug");
app.set("views", "./src/views");

app.use(routes);
app.use("/static", express.static("public"));

app.listen(3000, () => {
  console.log("Running on localhost:3000!");
});
