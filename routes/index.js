const router = require("express").Router();
const path = require("path");
const apiRoutes = require("./apiRoutes");

router.use("/api", apiRoutes);

router.get("/notes", (req,res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});



module.exports = router;