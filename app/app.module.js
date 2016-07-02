(function() {
  'use strict';

  var dependencies = [
    'ui.router',
    'ngAnimate',
    'ngSanitize',
  ]

  angular.module('app', dependencies)
    .config(setupStates)

  setupStates.$injet = [
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    '$httpProvider'];

  function setupStates($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

    $stateProvider
      // .state('landing',{
      //   url: '/',
      //   templateUrl: '/partials/landing.html',
      // })
      .state('app',{
        abstract: true,
        templateUrl: '/partials/app.html',
      })
      .state('create',{
        parent: 'app',
        // url: '/create',
        url: '/',

        templateUrl: '/partials/create.html'
      })
      .state('review',{
        parent: 'app',
        url: 'stories/:id/review'
      })
  }


}());
