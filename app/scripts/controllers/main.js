'use strict';

/**
 * @ngdoc function
 * @name movieApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieApp
 */
angular.module('movieApp')
  .controller('MainCtrl', function ($scope, MoviesDB, $http) {
  	$http.get('http://amc.ig.he-arc.ch:3003/movie/upcoming?language=fr')
    .success(function(data) {
    	$scope.movies  = data.results;
    })

  	$scope.MoviesDB = MoviesDB;
    
	$scope.addMovie = function () {
		MoviesDB.addMovie({title:$scope.newMovie, overview:$scope.overview});
		$scope.newMovie = '';
		$scope.overview = '';
	};

	$scope.deleteMovie = function (movie) {
		MoviesDB.deleteMovie(movie);
	}
  });
