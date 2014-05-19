'use strict';

angular.module('u4mApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
      {'title': 'HOME',
      'link': '#/'},
      {'title': 'ABOUT',
      'link': '#/about'},
      {'title': 'OUR M.O.',
      'link': '#/mo'},
      {'title': 'PRODUCTS',
      'link': '#/products'},
      {'title': 'BLOG',
      'link': '#/blog'}
    ];
    
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
