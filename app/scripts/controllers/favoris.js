'use strict';

/**
 * @ngdoc function
 * @name movieApp.controller:FavorisCtrl
 * @description
 * # FavorisCtrl
 * Controller of the movieApp
 */
angular.module('movieApp')
  .controller('FavorisCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
