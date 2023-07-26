const {
  selectAllCategories,
  selectAllFilm,
  selectFilmByCategory,
  selectFilmById,
} = require("../db/queries");
const pool = require("../db/db");

const getAllCategories = async (req, res) => {
  try {
    const allCategories = await pool.query(selectAllCategories);
    const data = allCategories.rows;
    res.status(200).json({ status: "success", data: data });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: `failed`, msg: `Something is wrong when fetching data` });
  }
};

const getAllFilm = async (req, res) => {
  try {
    const allFilms = await pool.query(selectAllFilm);
    const data = allFilms.rows;
    res.status(200).json({ status: "success", data: data });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: `failed`, msg: `Something is wrong when fetching data` });
  }
};

const getFilmById = async (req, res) => {
  try {
    const id = req.params.id;
    const singleFilm = await pool.query(selectFilmById, [id]);
    const data = singleFilm.rows;

    res.status(200).json({ status: "success", data: data });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: `failed`, msg: `Something is wrong when fetching data` });
  }
};

const getFilmByCategory = async (req, res) => {
  try {
    const name = req.params.name;
    const category = await pool.query(selectFilmByCategory, [name]);
    const data = category.rows;
    res.status(200).json({ status: "success", data: data });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: `failed`, msg: `Something is wrong when fetching data` });
  }
};

module.exports = {
  getAllCategories,
  getAllFilm,
  getFilmById,
  getFilmByCategory,
};
