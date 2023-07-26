const express = require("express");
const router = express.Router();
const {
  getAllCategories,
  getAllFilm,
  getFilmById,
  getFilmByCategory,
} = require("../controllers/film");

router.get("/", getAllFilm);
router.get("/category", getAllCategories);
router.get("/:id", getFilmById);
router.get("/category/:name", getFilmByCategory);

module.exports = router;
