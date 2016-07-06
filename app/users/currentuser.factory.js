(function() {
  'use strict';

  angular.module('app')
  .factory('currentUserService', currentUserFactory);

  currentUserFactory.$inject = ['$log', '$q'];

  function currentUserFactory ($log, $q) {
    var _user = {};

    return {
      setCurrentUser: setCurrentUser,
      getCurrentUser: getCurrentUser
    }

    function setCurrentUser (user){
      return  _user = user;
    }

    function getCurrentUser (){
      return _user
    }

  }

}());
