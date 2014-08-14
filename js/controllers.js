'use strict';

angular.module('Controllers', [])

  .controller('MainController', function ($scope, router) {
    $scope.reload = function() {
      router.setUpRoutes();
    };
  })