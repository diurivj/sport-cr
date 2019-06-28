const express = require('express')
const router = express.Router()
const { findSports } = require('../controllers/sports.controller')
const { findTeams } = require('../controllers/teams.controller')
const { findPlayers } = require('../controllers/players.controller')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'))

/* GET sports page */
router.get('/sports', findSports)

/* GET teams page */
router.get('/teams', findTeams)

/* GET players page */
router.get('/players', findPlayers)

module.exports = router
