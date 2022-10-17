const router = require("express").Router();
const fs = require("fs");

// following routes used in front end script file (/public/assets/js/script.js)
// get will read files in mock database
router.get('/notes', (req,res) => {
    fs.readFile("db/db.json", (err, data) => {
        const db = JSON.parse(data);
        res.json(db);
    })
})

// post will read files in mock database and add new note
router.post('/notes', (req,res) => {
    req.body.id = Math.floor(Math.random()*4000);
    fs.readFile("db/db.json", (err, data) => {
        const db = JSON.parse(data);
        db.push(req.body);
        fs.writeFile("db/db.json", JSON.stringify(db, null, 2), err => err ? console.log(err) : console.log("Successfully added note entry"));
    })
    res.json(req.body);
})

// post will read files in mock database and delete previous note
router.delete('/notes/:id', (req,res) => {
    const noteID = parseInt(req.params.id);
    fs.readFile("db/db.json", (err, data) => {
        const db = JSON.parse(data);
        const updatedDB = db.filter((element) => element.id !== noteID);
        fs.writeFile("db/db.json", JSON.stringify(updatedDB, null, 2), err => err ? console.log(err) : console.log("Successfully deleted note entry"));
    })
    res.json("Success");
})

module.exports = router;