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
        $scope.movies  = data.results;

        $scope.MoviesDB = MoviesDB;

        $scope.favorisId = MoviesDB.getFavoris();

        $scope.favoris = [];
        var allMovies = $scope.movies;
        for (var i=0; i<allMovies.length; i++) {
          if(allMovies[i].id == $scope.favorisId[i].id) {
            $scope.favoris.push(allMovies[i]);
          }
        }
    })
  });
