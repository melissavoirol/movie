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
    $rootScope.query = '';
    $rootScope.MoviesDB = MoviesDB

    $http.get('http://amc.ig.he-arc.ch:3003/movie/' + $routeParams.id + '?append_to_response=similar,releases,credits&language=fr')
    .success(function(movie) {
    	$scope.movie  = movie;
    	$rootScope.bgImage = movie.backdrop_path;

    	$scope.countryFlags = [];
        var countries = $scope.movie.releases.countries;
        for (var i=0; i<countries.length; i++) {
          if(countries[i].iso_3166_1 == 'DE' || countries[i].iso_3166_1 == 'FR' || countries[i].iso_3166_1  == 'US') {
            $scope.countryFlags.push(countries[i]);
          }
        };

        $scope.actors = [];
        var cast = $scope.movie.credits.cast;
        for (var i=0; i<6; i++) {
           $scope.actors.push(cast[i]);
        }

        $scope.realisator;
        var crew = $scope.movie.credits.crew;
        for (var i=0; i<crew.length; i++) {
          if(crew[i].job == "Director") {
            $scope.realisator = crew[i];
          }
        }
    })
  });
