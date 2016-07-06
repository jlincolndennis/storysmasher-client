(function() {
  'use strict';

  angular.module('app')
  .factory('accountFactory', accountFactory)

  accountFactory.$inject = ['$log', '$http', 'currentUserService']

  function accountFactory($log, $http, currentUserService) {
    return {
      submitStory, updateStory, getStory, signIn, signUp, getUser
    }

    function submitStory(story) {
      return $http.post('http://localhost:8000/api/v1/stories/', story)
    }

    function updateStory(story) {
      return $http.put(`http://localhost:8000/api/v1/stories/${story.id}`, story)
    }

    function getStory(id) {
      return $http.get(`http://localhost:8000/api/v1/stories/${id}`)
    }

    function signIn(user) {
      return $http.post('http://localhost:8000/auth/signin', {user})
    }

    function signUp(user) {
      return $http.post('http://localhost:8000/auth/signup', {user})
    }

    function getUser(id) {
      return $http.get(`http://localhost:8000/api/v1/users/${id}`)
    }

  }
}());
