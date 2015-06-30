'use strict';

/**
 * @ngdoc service
 * @name movieApp.MoviesDB
 * @description
 * # MoviesDB
 * Factory in the movieApp.
 */
angular.module('movieApp')
  .factory('MoviesDB', function ($http) {
    // Service logic
    // ...
    var movies = [];

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

    $http.get('http://amc.ig.he-arc.ch:3003/movie/upcoming?language=fr')
    .success(function(data) {
    	movies = data.results;
    })

    var meaningOfLife = 42;

    // Public API here
    return {
      //imgUrl = '';
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
