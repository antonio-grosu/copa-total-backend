const {
  getAllTournaments,
  getTournamentById,
  createTournament,
  editTournaMatches,
  deleteTournament,
} = require("../controllers/Tournament");

const express = require("express");

const router = express.Router();

router
  .get("/", getAllTournaments)
  .get("/:id", getTournamentById)
  .post("/", createTournament)
  .put("/:id", editTournaMatches)
  .delete("/:id", deleteTournament);

module.exports = router;
