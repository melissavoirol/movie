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
    var researchedMovies = [];

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

      getResearchedMovies: function () {
      	return researchedMovies;
      },

      searchMovies: function (query) {
        $http.get('http://amc.ig.he-arc.ch:3003/search/movie?query=' + query + '&language=fr')
        .success(function(data) {
        	researchedMovies = data.results;
        });
      },

      loadMovies: function () {
      	$http.get('http://amc.ig.he-arc.ch:3003/movie/upcoming?language=fr')
        .success(function(data) {
        	researchedMovies = data.results;
        });
      },

      addFavori: function (id) {
	  	movies.push(id);
	  	stockageLocal ();
	  },

	  getFavoris: function () {
	  	return movies;
	  },

	  deleteFavori: function (id) {
        movies.splice(movies.indexOf(id), 1);
	  	stockageLocal ();
	  },

	  isId: function (id) {
        for (var i=0; i<movies.length; i++) {
          if(movies.indexOf(id) > -1) {
            return true;
          }
          else {
            return false;
          }
        }
	  }
    }
  });
