const express = require('express')
const router = express.Router();
const db = require('./areas-model');

router.get('/', (req, res) => {
    db.find()
        .then((areas) => {
            res.status(200).json(areas)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({ message: "doh" })
        })
})

router.post('/', (req, res) => {
    db.add(req.body)
        .then((areas) => {
            res.status(200).json(areas)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({ message: "doh!" })
        })
})

router.delete('/:id', (req, res) => {
    db.remove(req.params.id)
        .then((areas) => {
            res.status(200).json(areas)
        })
        .catch((err) => {
            res.status(500).json({ message: "doh!" })
        })
})

module.exports = router;