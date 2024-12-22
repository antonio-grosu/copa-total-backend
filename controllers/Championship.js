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

// Edit a championship
const editChampionshipMatches = async (req, res) => {
  try {
    // Find and update the championship
    const championship = await Championship.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    // If no championship is found, return a 404 error
    if (!championship) {
      return res.status(404).send({ message: "Championship not found" });
    }

    // Send the updated championship as a response
    res.status(200).send(championship);
  } catch (error) {
    // Handle errors (e.g., validation errors)
    res.status(400).send({ error: error.message });
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
