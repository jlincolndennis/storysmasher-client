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

      .state('create',{
        url: '/',
        template: '<ss-smash></ss-smash>'
      })
      .state('story',{
        // parent: 'app',
        url: '/stories',
        templateUrl: '/partials/story.html'
        // template: '<ss-story></ss-story>'
      })
  }


}());
