const mongoose = require("mongoose");

const { Schema } = mongoose;

const tournamentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  matches: {
    type: Object,
    required: true,
    groups: {
      type: Array,
      default: [],
    },
    semifinals: {
      type: Array,
      default: [],
    },
    finals: {
      type: Array,
      default: [],
    },
  },
});

const Tournament = mongoose.model("Tournament", tournamentSchema);

module.exports = Tournament;
