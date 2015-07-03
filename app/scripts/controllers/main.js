'use strict';

/**
 * @ngdoc function
 * @name movieApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieApp
 */
angular.module('movieApp')
  .controller('MainCtrl', function ($scope, MoviesDB, $http, $rootScope, $routeParams) {
  	MoviesDB.loadMovies ();

    $rootScope.bgImage = '';

    var query = null;
    var query = $routeParams.query;
    
    $scope.MoviesDB = MoviesDB;

	$rootScope.refresh = function () {
		MoviesDB.loadMovies ();
		$scope.MoviesDB = MoviesDB;
		$scope.query = '';
	}

	var someMovies = $scope.MoviesDB.getResearchedMovies ();
	$scope.aMovie = someMovies[0];

	if (query != null) {
		MoviesDB.searchMovies (query);
		$scope.MoviesDB = MoviesDB;
	}

		$scope.addFavori = function (movieId) {
		MoviesDB.addFavori(movieId);
	}
  })
