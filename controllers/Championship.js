const Championship = require("../models/Championship");

// Create a new championship
const createChampionship = async (req, res) => {
  try {
    const championship = Championship.create(req.body);
    res.status(201).send(championship);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

const getAllChampionships = async (req, res) => {
  try {
    const championships = await Championship.find({});
    res.send(championships);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get a championship by ID
const getChampionshipById = async (req, res) => {
  try {
    const championship = await Championship.findById(req.params.id);
    if (!championship) {
      return res.status(404).send();
    }
    res.send(championship);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Edit matches array of a championship
const editChampionshipMatches = async (req, res) => {
  try {
    const championship = await Championship.findById(req.params.id);
    if (!championship) {
      return res.status(404).send();
    }
    championship.matches = req.body.matches;
    await championship.save();
    res.send(championship);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a championship by ID
const deleteChampionship = async (req, res) => {
  try {
    const championship = await Championship.findByIdAndDelete(req.params.id);
    if (!championship) {
      return res.status(404).send();
    }
    res.send(championship);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAllChampionships,
  getChampionshipById,
  createChampionship,
  editChampionshipMatches,
  deleteChampionship,
};
