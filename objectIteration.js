const { fa } = require("@faker-js/faker");

// DO NOT MODIFY OR DELETE `movies`
const movies = [
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    genre: "Drama",
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genre: "Crime",
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    genre: "Crime",
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genre: "Action",
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    genre: "Drama",
  },
];

// Q1: Write a `hasKey` function that takes two arguments, an object and a key.
// The function should return true if the object contains  the specified key, and false otherwise.
function hasKey(obj, key) {
  //sol 1:
  // if (key in obj) {
  //   return true;
  // } else {
  //   return false;
  // }
  //sol 2
  // let objectKeys = Object.keys(obj); // ["title", "director"]
  // let exists = objectKeys.indexOf(key); // find
  // if (exists > -1) {
  //   return true;
  // } else {
  //   return false;
  // }
  return key in obj;
}
// write your code here...

// Q2: Write a `printMovieTitles` function that accepts an array of objects called 'movies'
// and iterates through it to print the titles of all the movies.
function printMovieTitles(movies) {
  movies.forEach((movie) => {
    console.log(movie.title);
  });
}
// printMovieTitles(movies);
// write your code here...

// Q3: Write a `countMoviesByYear` function that accepts an array of objects called 'movies'
// and a year
// and returns the number of movies that were released in that year.
function countMoviesByYear(movies, year) {
  // write your code here...
  return movies.filter((movie) => movie.year == year).length;
}
console.log(countMoviesByYear(movies, 1972));

// Q4: Write a `updateMovieGenre` function that accepts a title and a new genre
// and updates the genre of the given movie, if it exists,
// then returns the modified array of movies.
// Hint: use array iterator .find
function updateMovieGenre(movies, title, newGenre) {
  let genreUpdate = movies.find((movie) => movie.title == title);
  genreUpdate.genre = newGenre;
  return movies;
} //gives only the firt movie with that title if 2 existed
//push and pop are for arrays
// write your code here...
console.log(updateMovieGenre(movies, "The Godfather", "Comedy"));
module.exports = {
  hasKey,
  printMovieTitles,
  countMoviesByYear,
  updateMovieGenre,
};
