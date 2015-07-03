'use strict';

/**
 * @ngdoc function
 * @name movieApp.controller:FavorisCtrl
 * @description
 * # FavorisCtrl
 * Controller of the movieApp
 */
angular.module('movieApp')
  .controller('FavorisCtrl', function ($scope, MoviesDB, $http, $rootScope) {
    $http.get('http://amc.ig.he-arc.ch:3003/movie/upcoming?language=fr')
    .success(function(data) {
      $scope.movies = data.results;

	  $rootScope.bgImage = '';

      $scope.favorisId = MoviesDB.getFavoris();

      $scope.favoris = [];

      var allMovies = $scope.movies;
      for (var i=0; i<allMovies.length; i++) {
        if($scope.favorisId.indexOf(allMovies[i].id) > -1) {
          $scope.favoris.push(allMovies[i]);
        }
      }
      
      $scope.deleteFavori = function (movie) {
        MoviesDB.deleteFavori(movie.id);
        $scope.favoris.splice($scope.favoris.indexOf(movie), 1);
	  }

      $scope.isId = function (movieId) {
        MoviesDB.isId(movieId);
	  }
    })
  });
