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

    var meaningOfLife = 42;

    // Public API here
    return {
      imgURL: 'http://image.tmdb.org/t/p/',
      
      someMethod: function () {
        return meaningOfLife;
      },

      addFavori: function (id) {
	  	movies.push(id);
	  	stockageLocal ();
	  },

	  getFavoris: function () {
	  	return movies;
	  }
    };
  });
