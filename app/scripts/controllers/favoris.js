'use strict';

/**
 * @ngdoc function
 * @name movieApp.controller:FavorisCtrl
 * @description
 * # FavorisCtrl
 * Controller of the movieApp
 */
angular.module('movieApp')
  .controller('FavorisCtrl', function ($scope, MoviesDB, $http) {
    $http.get('http://amc.ig.he-arc.ch:3003/movie/upcoming?language=fr')
    .success(function(data) {
      $scope.movies = data.results;

      $scope.favorisId = MoviesDB.getFavoris();

      $scope.favoris = [];

      var allMovies = $scope.movies;
      for (var i=0; i<allMovies.length; i++) {
        if($scope.favorisId.indexOf(allMovies[i].id) > -1) {
          $scope.favoris.push(allMovies[i]);
        }
      }
      
      $scope.deleteFavori = function (movieId) {
        MoviesDB.deleteFavori(movieId);
        $scope.favoris.splice($scope.favoris.indexOf(movieId, 1));
	  }

      $scope.isId = function (movieId) {
        MoviesDB.isId(movieId);
	  }
    })
  });
