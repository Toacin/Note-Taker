const router = require("express").Router();
const fs = require("fs");

router.get('/notes', (req,res) => {
    const db = require("../../db/db.json");
    res.json(db);
})

router.post('/notes', (req,res) => {
    const db = require("../../db/db.json");
    req.body.id = Math.floor(Math.random()*4000);
    db.push(req.body);
    let data = JSON.stringify(db, null, 2);
    fs.writeFile("db/db.json", data, err => err ? console.log(err) : console.log("success"));
    res.json(req.body);
})

router.delete('/notes/:id', (req,res) => {
    const noteID = parseInt(req.params.id);
    const UpToDatedb = require("../../db/db.json");
    const result = UpToDatedb.filter(note => note.id !== noteID);
    fs.writeFile("db/db.json", JSON.stringify(result, null, 2), err => err ? console.log(err) : console.log("success"));
    res.json('success');
})

module.exports = router;