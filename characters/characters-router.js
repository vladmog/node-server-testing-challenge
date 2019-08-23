const express = require('express')
const router = express.Router();
const db = require('./characters-model');

router.get('/', (req, res) => {
    db.find()
        .then((characters) => {
            res.status(200).json(characters)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({ message: "doh" })
        })
})

router.post('/', (req, res) => {
    db.add(req.body)
        .then((characters) => {
            res.status(200).json(characters)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({ message: "doh!" })
        })
})

router.delete('/:id', (req, res) => {
    db.remove(req.params.id)
        .then((characters) => {
            res.status(200).json(characters)
        })
        .catch((err) => {
            res.status(500).json({ message: "doh!" })
        })
})

module.exports = router;