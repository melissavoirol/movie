'use strict';

/**
 * @ngdoc filter
 * @name movieApp.filter:urlPoster
 * @function
 * @description
 * # urlPoster
 * Filter in the movieApp.
 */
angular.module('movieApp')
  .filter('urlPoster', function (MoviesDB) {
    return function (posterURL) {
      if (posterURL) {
        return MoviesDB.imgURL + 'w185' + posterURL;
      }
      else {
        return '/images/noposter.jpg';
      }
    };
  });
