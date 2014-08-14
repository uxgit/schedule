'use strict'

angular.module('App', ['ui.router', 'Routing', 'Controllers'])

    .config(function ($stateProvider, $urlRouterProvider, routerProvider) {
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'views/dashboard.html'
            });

        $urlRouterProvider.otherwise('/dashboard');

        routerProvider.setCollectionUrl('json/route.json');
    });