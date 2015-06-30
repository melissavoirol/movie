'use strict';

/**
 * @ngdoc service
 * @name movieApp.MoviesDB
 * @description
 * # MoviesDB
 * Factory in the movieApp.
 */
angular.module('movieApp')
  .factory('MoviesDB', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    var moviesLS = localStorage.getItem('movies');
    if (moviesLS) {
		var movies = JSON.parse(moviesLS);
    }
	else {
    	movies = [];
    }

    function stockageLocal () {
      localStorage.setItem('movies', JSON.stringify(movies));
	}
    
    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },

      getMovies: function () {
        return movies;
      },

      addMovie: function (movie) {
		movies.push(movie);
		stockageLocal ();
	  },

      deleteMovie: function (movie) {
        movies.splice(movies.indexOf(movie), 1);
		stockageLocal ();
	  },
    };
  });
