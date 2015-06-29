'use strict';

/**
 * @ngdoc function
 * @name movieApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieApp
 */
angular.module('movieApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	for (var i=0; i < 100; i++) {
		$scope.awesomeThings.push('Element :' + (i+1));
	}
	$scope.monClick = function () {
		$scope.awesomeThings.push($scope.nouveauFilm);
		$scope.nouveauFilm = '';
	};
	$scope.active = true;
	$scope.nbAffiche = 20;
	$scope.debut = 3;
  });
