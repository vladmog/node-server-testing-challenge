const express = require('express');

const charactersRouter = require('../characters/characters-router.js');
const areasRouter = require('../areas/areas-router.js');

const router = express.Router();

router.use('/characters', charactersRouter);
router.use('/areas', areasRouter);

module.exports = router;