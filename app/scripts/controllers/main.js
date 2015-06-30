'use strict';

/**
 * @ngdoc function
 * @name movieApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieApp
 */
angular.module('movieApp')
  .controller('MainCtrl', function ($scope) {
    var moviesLS = localStorage.getItem('movies');
    if (moviesLS) {
		$scope.movies = JSON.parse(moviesLS);
    }
	else {
    	$scope.movies = [];
    }
    
	$scope.addMovie = function () {
		var movie = {title:$scope.newMovie, comment:$scope.comment};
		$scope.movies.push(movie);
		$scope.newMovie = '';
		$scope.comment = '';
		stockageLocal ();

	};

	$scope.deleteMovie = function (movie) {
		$scope.movies.splice($scope.movies.indexOf(movie), 1);
		stockageLocal ();
	}
	
	function stockageLocal () {
		localStorage.setItem('movies', JSON.stringify($scope.movies));
	}
  });
