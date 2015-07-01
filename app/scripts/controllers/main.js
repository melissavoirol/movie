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
    
	$scope.addFavori = function (movieId) {
		MoviesDB.addFavori(movieId);
	};
  });
