(function() {
  'use strict';

  var dependencies = [
    'ui.router',
    'ngAnimate',
    'ngSanitize',
  ]

  angular.module('app', dependencies)
    .run(['$anchorScroll', function($anchorScroll) {
      $anchorScroll.yOffset = 200;
    }])
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
      .state('app', {
        abstract: true,
        template: '<ss-app></ss-app>'
      })
      .state('smash',{
        url: '/',
        parent: 'app',
        template: '<ss-smash></ss-smash>'
      })
      .state('story',{
        url: '/stories/:id',
        parent: 'app',
        template: '<ss-story></ss-story>'
      })
      .state('account',{
        url: '/account',
        parent: 'app',
        template: '<ss-account></ss-account>'
      })
  }


}());
