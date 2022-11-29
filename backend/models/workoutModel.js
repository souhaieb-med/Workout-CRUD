const mongoose = require('mongoose')


const Schema = mongoose.Schema
const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
); //  whenever we add a workout gives us when is't created and when is't updated

module.exports = mongoose.model('workout', workoutSchema)

