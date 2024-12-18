const express = require("express");
const {
  getAllChampionships,
  getChampionshipById,
  createChampionship,
  editChampionshipMatches,
  deleteChampionship,
} = require("../controllers/Championship");
const router = express.Router();

// Define routes
router.get("/", getAllChampionships);
router.get("/:id", getChampionshipById);
router.post("/", createChampionship);
router.put("/:id", editChampionshipMatches);
router.delete("/:id", deleteChampionship);

module.exports = router;
