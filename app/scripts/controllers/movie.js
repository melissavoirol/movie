'use strict';

/**
 * @ngdoc function
 * @name movieApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the movieApp
 */
angular.module('movieApp')
  .controller('MovieCtrl', function ($scope, $routeParams, MoviesDB, $http, $rootScope) {
    $rootScope.MoviesDB = MoviesDB

    $http.get('http://amc.ig.he-arc.ch:3003/movie/' + $routeParams.id + '?append_to_response=similar,releases,credits&language=fr')
    .success(function(movie) {
    	$scope.movie  = movie;
    	$rootScope.bgImage = movie.backdrop_path;
    })

    /*search
        $http.get('http://amc.ig.he-arc.ch:3003/movie?query=' + $search + '&language=fr')
        search/movie?query=matrix&language=fr*/
  });
