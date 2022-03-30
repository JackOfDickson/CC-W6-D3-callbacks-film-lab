const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.getFilmTitles = function() {
  const result = this.films.map((film) => {
    return film.title
  });
  return result
}

Cinema.prototype.getFilmByTitle = function(title) {
  const result = this.films.find((film) => {
    return film.title == title;
  })
  return result;
}

Cinema.prototype.getFilmsByGenre = function(genre) {
  const result = this.films.filter((film) => {
    return film.genre == genre;
  });
  return result
}

Cinema.prototype.isThereFilmInYear = function(year) {
  filmYears = [];
    this.films.forEach((film) => {
      filmYears.push(film.year);
    })
  const result = filmYears.includes(year);
  return result;
};

Cinema.prototype.allFilmsOverLegnth = function (time) {
  filmTimes = [];
  this.films.forEach((film) => {
    filmYears.push(film.length);
  })
  const isLongerThan = length => length < time
  const result = filmTimes.every(isLongerThan);
  return result;
}

module.exports = Cinema;
