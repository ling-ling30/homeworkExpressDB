const selectAllFilm = "SELECT * FROM film";
const selectFilmById = "select * from film where film_id=$1";
const selectAllCategories = "SELECT * FROM category";
const selectFilmByCategory = `SELECT * FROM film_category
INNER JOIN category ON category.category_id = film_category.category_id 
INNER JOIN film ON film.film_id = film_category.category_id 
WHERE category.name = $1 `;

module.exports = {
  selectAllCategories,
  selectAllFilm,
  selectFilmByCategory,
  selectFilmById,
};
