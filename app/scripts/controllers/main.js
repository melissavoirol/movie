'use strict';

/**
 * @ngdoc function
 * @name movieApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieApp
 */
angular.module('movieApp')
  .controller('MainCtrl', function ($scope, MoviesDB) {
  	$scope.movies = MoviesDB.getMovies();
    
	$scope.addMovie = function () {
		MoviesDB.addMovie({title:$scope.newMovie, comment:$scope.comment});
		$scope.newMovie = '';
		$scope.comment = '';
	};

	$scope.deleteMovie = function (movie) {
		MoviesDB.deleteMovie(movie);
	}
  });
