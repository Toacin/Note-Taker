const router = require("express").Router();
const path = require("path");
const apiRoutes = require("./apiRoutes");

// handle api routes
router.use("/api", apiRoutes);

//html routes
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get("/notes", (req,res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});



module.exports = router;