const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sportSchema = new Schema(
  {
    name: String,
    description: String,
    ballSize: {
      type: String,
      enum: ['small', 'medium', 'large']
    },
    players: Number,
    teams: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Team'
      }
    ]
  },
  {
    versionKey: false,
    timestamps: true
  }
)

module.exports = mongoose.model('Sport', sportSchema)
