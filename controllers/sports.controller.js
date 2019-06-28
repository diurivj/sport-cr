const Sport = require('../models/Sport')

exports.findSports = (req, res, next) => {
  Sport.find()
    .populate('teams')
    .then(sports => res.render('sports/all', { sports }))
    .catch(err => res.render('sports/all', err))
}

exports.viewCreateSport = (req, res, next) => {
  res.render('sports/create')
}

exports.createSport = (req, res, next) => {
  Sport.create({ ...req.body, players: Number(req.body.players) })
    .then(sport => res.redirect('/sports'))
    .catch(err => res.send(err))
}

exports.deleteSport = (req, res, next) => {
  const { id } = req.params
  Sport.findByIdAndRemove(id)
    .then(() => res.redirect('/sports'))
    .catch(err => res.send(err))
}
