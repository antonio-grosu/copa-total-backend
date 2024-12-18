const Tournament = require("../models/Tournament");

const getAllTournaments = async (req, res) => {
  try {
    const tournaments = await Tournament.find({});
    res.status(200).send(tournaments);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getTournamentById = async (req, res) => {
  try {
    const tournament = await Tournament.findById(req.params.id);
    if (!tournament) {
      return res.status(404).send();
    }
    res.send(tournament);
  } catch (err) {
    res.status(500).send(err);
  }
};

const createTournament = async (req, res) => {
  try {
    const tournament = await Tournament.create(req.body);
    res.status(201).send(tournament);
  } catch (err) {
    res.status(400).send(err);
  }
};

const editTournaMatches = async (req, res) => {
  try {
    const tournament = await Tournament.findById(req.params.id);
    if (!tournament) {
      return res.status(404).send();
    }
    tournament.matches = req.body.matches;
    await tournament.save();
    res.send(tournament);
  } catch (err) {
    res.status(400).send(err);
  }
};

const deleteTournament = async (req, res) => {
  try {
    const tournament = await Tournament.findByIdAndDelete(req.params.id);
    if (!tournament) {
      return res.status(404).send();
    }
    res.send(tournament);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getAllTournaments,
  getTournamentById,
  createTournament,
  editTournaMatches,
  deleteTournament,
};
