'use strict';

/**
 * @ngdoc function
 * @name movieApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the movieApp
 */
angular.module('movieApp')
  .controller('MovieCtrl', function ($scope, $routeParams, MoviesDB) {
    $scope.id = $routeParams.id;
    $scope.movie = MoviesDB.getMovies()[$routeParams.id];
    $scope.MoviesDB = MoviesDB;
  });
