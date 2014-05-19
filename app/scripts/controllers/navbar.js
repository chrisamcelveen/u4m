'use strict';

angular.module('u4mApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
      {'title': 'HOME',
      'link': '#/'},
      {'title': 'ABOUT',
      'link': '#/about',
      'id': 'about'},
      {'title': 'OUR M.O.',
      'link': '#/mo',
      'id': 'mo'},
      {'title': 'PRODUCTS',
      'link': '#/products',
      'id': 'products'},
      {'title': 'BLOG',
      'link': '#/blog'}
    ];
    
    $scope.SubmenuAbout = [
      {'title': 'HOME',
      'link': '#/'},
      {'title': 'ABOUT',
      'link': '#/about',
      'id': 'about'},
      {'title': 'OUR M.O.',
      'link': '#/mo',
      'id': 'mo'},
      {'title': 'PRODUCTS',
      'link': '#/products',
      'id': 'products'},
      {'title': 'BLOG',
      'link': '#/blog'}
    ];
    
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
