const router = require("express").Router();
const fs = require("fs");

router.get('/notes', (req,res) => {
    fs.readFile("db/db.json", (err, data) => {
        const db = JSON.parse(data);
        res.json(db);
    })
})

router.post('/notes', (req,res) => {
    req.body.id = Math.floor(Math.random()*4000);
    fs.readFile("db/db.json", (err, data) => {
        const db = JSON.parse(data);
        db.push(req.body);
        fs.writeFile("db/db.json", JSON.stringify(db, null, 2), err => err ? console.log(err) : console.log("Successfully added note entry"));
    })
    res.json(req.body);
})

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