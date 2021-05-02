const express = require("express");
const router = express.Router();

const data = require("../../data.json");

router.get("/", (req, res) => {
    res.render("index", data);
});
router.get("/project/:id(\\d+)", (req, res, next) => {
    const project = data.projects.find(
        (project) => project.id == req.params.id
    );
    if (!project) {
        const err = new Error("Project Not Found");
        err.status = 404;
        next(err);
        return;
    }
    res.render("project", project);
});
router.get("/about", (req, res) => {
    res.render("about");
});

module.exports = router;
