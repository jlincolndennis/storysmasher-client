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

  .factory('authInterceptor', function ($location) {
    return {
      request: function (config) {
        var token = localStorage.getItem('jwt')

        if (token) {
          config.headers.Authorization = localStorage.getItem('jwt');
          return config
        } else {
          return config
        }
      },
      responseError: function (response) {
        if (response.status === 403){
          localStorage.removeItem('jwt');
          $location.path('/')
        }
        return response

      }
    }
  })

  .config(setupStates)

  setupStates.$injet = [
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    '$httpProvider'];

    function setupStates($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
      $httpProvider.interceptors.push('authInterceptor');
      $locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise('/');

      $stateProvider
      .state('app', {
        abstract: true,
        template: '<ss-app></ss-app>',
      })
      .state('smash',{
        url: '/',
        parent: 'app',
        template: '<ss-smash></ss-smash>',
        resolve: {
          currentUserResolve: currentUserResolve
        },
      })
      .state('story',{
        url: '/story/:id',
        parent: 'app',
        template: '<ss-story></ss-story>',
        resolve: {
          currentUserResolve: currentUserResolve
        },
      })
      .state('listen',{
        url: '/story/:id/listen',
        parent: 'app',
        template: '<ss-listen></ss-listen>',
        // templateUrl: '/partials/listen.html',
        resolve: {
          currentUserResolve: currentUserResolve
        },
      })
      .state('user', {
        url: '/users/:id',
        parent: 'app',
        template: '<ss-user></ss-user>'
      })
    }

    function currentUserResolve ($http, currentUserService, $location) {
      function hostId() {
        var url = "https://storysmasher-api.herokuapp.com"
        if ($location.$$host === 'localhost') {
          console.log('LOCAL');
          return url = 'http://localhost:8000'

        } else {
          console.log('NOT LOCAL');
          return url = "https://storysmasher-api.herokuapp.com"
        }
      }
      var path = hostId();
      return $http.get(`${path}/api/v1/users/me`)
      .then(function (response) {
        console.log(response.data.user);
        return currentUserService.setCurrentUser(response.data.user)
      })
      .catch(function () {
        localStorage.clear();
        return currentUserService.setCurrentUser(null)
      })
    }

  }());
