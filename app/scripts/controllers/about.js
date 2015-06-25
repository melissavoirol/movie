'use strict';

/**
 * @ngdoc function
 * @name movieApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the movieApp
 */
angular.module('movieApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
