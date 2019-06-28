const Sport = require('../models/Sport')

exports.findSports = (req, res, next) => {
  Sport.find()
    .populate('teams')
    .then(sports => res.render('sports/all', { sports }))
    .catch(err => res.render('sports/all', err))
}
