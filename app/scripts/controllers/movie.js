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

    	$scope.pays = [];
        var countries = $scope.movie.releases.countries;
        for (var i=0; i<countries.length; i++) {
          if(countries[i].iso_3166_1 == 'DE' || countries[i].iso_3166_1 == 'FR' || countries[i].iso_3166_1  == 'US') {
            $scope.pays.push(countries[i]);
          }
        };
    })

    /*search
        $http.get('http://amc.ig.he-arc.ch:3003/movie?query=' + $search + '&language=fr')
        search/movie?query=matrix&language=fr*/
  });
