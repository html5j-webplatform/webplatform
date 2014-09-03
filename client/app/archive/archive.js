'use strict';

angular.module('webplatformApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('archive', {
        url: '/archive',
        templateUrl: 'app/archive/archive.html',
        controller: 'ArchiveCtrl'
      });
  });