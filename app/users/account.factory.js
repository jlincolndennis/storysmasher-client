(function() {
  'use strict';

  angular.module('app')
  .factory('accountFactory', accountFactory)

  accountFactory.$inject = ['$log', '$http', 'currentUserService', '$location']

  function accountFactory($log, $http, currentUserService, $location) {
    return {
      submitStory, getStory, signIn, signUp, getUser
    }

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

    function submitStory(story) {
      var path = hostId();
      return $http.post(`${path}/api/v1/stories/`, story)
    }


    function getStory(id) {
      var path = hostId();
      return $http.get(`${path}/api/v1/stories/${id}`)
    }

    function signIn(user) {
      var path = hostId();
      return $http.post(`${path}/auth/signin`, {user})
    }

    function signUp(user) {
      var path = hostId();
      return $http.post(`${path}/auth/signup`, {user})
    }

    function getUser(id) {
      var path = hostId();
      return $http.get(`${path}/api/v1/users/${id}`)
    }

  }
}());
