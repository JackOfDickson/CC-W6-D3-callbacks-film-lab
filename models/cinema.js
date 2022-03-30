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
    filmTimes.push(film.length);
  })
  const isLongerThan = length => length > time
  const result = filmTimes.every(isLongerThan);
  return result;
}

Cinema.prototype.totalRunningTime = function() {
  filmTimes = [];
  this.films.forEach((film) => {
    filmTimes.push(film.length);
  })
  const result = filmTimes.reduce((runningTotal, number) => {
    return runningTotal + number;
  }, 0);
  return result
}

Cinema.prototype.comprehensiveSearch = function(datatype, value) {




  const result = this.films.datatype.filter((film) => {
    return film.datatype == value;
  });
  return result
}

module.exports = Cinema;
