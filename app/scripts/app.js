'use strict';

/**
 * @ngdoc overview
 * @name movieApp
 * @description
 * # movieApp
 *
 * Main module of the application.
 */
angular
  .module('movieApp', [
    'ngAnimate',
    'ngCookies',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'slick',
    'ngFlag'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/movie/:id', {
        templateUrl: 'views/movie.html',
        controller: 'MovieCtrl'
      })
      .when('/rechercher/:query', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
        .when('/favoris', {
        templateUrl: 'views/favoris.html',
        controller: 'FavorisCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
