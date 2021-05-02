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
    res.locals.error = err;
    res.status(err.status || 500);

    if (err.status == 404) {
        res.render("page-not-found");
        return;
    }
    res.render("error");
});

app.listen(3000, () => {
    console.log("Running on localhost:3000!");
});
