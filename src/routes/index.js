const express = require("express");
const router = express.Router();

const data = require("../../data.json");

router.get("/", (req, res) => {
    res.render("index", data);
});
router.get("/project/:id", (req, res) => {
    const project = data.projects.find(
        (project) => project.id == req.params.id
    );
    res.render("project", project);
});
router.get("/about", (req, res) => {
    res.render("about");
});

module.exports = router;
