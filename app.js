const express = require("express");

const routes = require("./src/routes");

const app = express();

app.set("view engine", "pug");
app.set("views", "./src/views");

app.use(routes);
app.use("/static", express.static("public"));

app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.locals.error = err;
    console.error(err.message);
    if (err.status == 404) {
        res.render("page-not-found");
        return;
    }
    res.locals.error.status = 500;
    res.render("error");
});

app.listen(3000, () => {
    console.log("Running on localhost:3000!");
});
