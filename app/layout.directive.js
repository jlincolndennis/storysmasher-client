(function() {
  'use strict';

  angular.module('app')
  .directive('ssApp', layoutDirective)


  function layoutDirective() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/partials/layout.html',
      controller: layoutController,
      controllerAs: 'vm'
    }
  }

  layoutController.inject =['$log','$location', '$state','accountFactory','currentUserService', '$rootScope']

  function layoutController($log, $location, $state, accountFactory, currentUserService, $rootScope) {
    var vm = this;
    vm.smashLaunch = smashLaunch;
    vm.signInLaunch = signInLaunch;
    vm.currentUser = currentUserService.getCurrentUser();
    vm.signIn = {}
    vm.signInUser = signInUser;
    vm.saveLaunch = saveLaunch;
    vm.signOut = signOut;
    vm.state = {name: $state.current.name}
    console.log('vm.currentUser', vm.currentUser);

    function smashLaunch() {

      if ($state.current.name === 'story') {
        $('#warning').modal('show');
      } else {
        if ($location.$$path !== '/') $state.go('smash')
        $('#storySetup').modal('show');

      }
    }

    function saveLaunch() {
      $('#storyReview').modal('show');
    }

    function signOut() {
      vm.currentUser = {}
      localStorage.removeItem('jwt');
    }

    function signInUser(form) {
      var user = angular.copy(vm.signIn)
      vm.signIn = {};
      form.$setUntouched();
      return accountFactory.signIn(user).then(function (res) {
        console.log(res);
        $('#signIn').modal('hide');
        var currentUser = {
          username: res.data.username,
          id : res.data.id
        }
        vm.currentUser = currentUser;
        currentUserService.setCurrentUser(currentUser)
        localStorage.setItem('jwt', res.data.jwt)
      })

    }
    function signInLaunch() {
      $('#storyReview').modal('hide');
      $('#storySetup').modal('hide');
      $('#warning').modal('hide');
      $('#signIn').modal('show');
    }

  }
}());
