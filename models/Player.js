const mongoose = require('mongoose')
const Schema = mongoose.Schema

const playerSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    alias: String,
    age: Number
  },
  {
    versionKey: false,
    timestamps: true
  }
)

module.exports = mongoose.model('Player', playerSchema)
