'use strict';

angular.module('webplatformApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': 'main()'
    },{
      'title': 'メーリングリスト',
      'link': '/'
    },{
      'title': 'アーカイブ',
      'link': 'archive()'
    },{
      'title': 'メンバー',
      'link': 'member()'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });