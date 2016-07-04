(function() {
  'use strict';

  angular.module('app')
    .factory('accountFactory', accountFactory)

    accountFactory.$inject = ['$log', '$http']

    function accountFactory($log, $http) {
      return {
        submitStory, getStory, signIn
      }

      function submitStory(story) {
        story.user_id = 2;
        return $http.post('http://localhost:8000/api/v1/stories/', story)
      }

      function getStory(id) {
        return $http.get(`http://localhost:8000/api/v1/stories/${id}`)
      }

      function signIn(user) {
        return $http.post('http://localhost:8000/api/v1/users', {user})
      }

    }
}());
