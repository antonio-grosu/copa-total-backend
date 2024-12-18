const mongoose = require("mongoose");

const { Schema } = mongoose;

const championshipSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: Number,
    required: true,
  },
  matches: {
    type: Array,
    default: [],
    required: true,
  },
});

const Championship = mongoose.model("Championship", championshipSchema);

module.exports = Championship;
