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
    $scope.films = [
    ];
	$scope.ajouterElement = function () {
		$scope.films.push($scope.nouveauFilm);
		$scope.nouveauFilm = '';
		stockageLocal ();

	};
	$scope.supprimerElement = function (film) {
		$scope.films.splice($scope.films.indexOf(film), 1);
		stockageLocal ();
	}
	function stockageLocal () {
		localStorage.setItem('films', JSON.stringify($scope.films));
	}
  });
