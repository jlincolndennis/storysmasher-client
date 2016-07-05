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

  layoutController.inject =['$log','$location', '$state']

  function layoutController($log, $location, $state) {
    var vm = this;
    vm.smashLaunch = smashLaunch;
    vm.signIn = signIn;
    vm.saveLaunch = saveLaunch;
    vm.state = {name: $state.current.name}

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

    function signInUser(form) {
      var user = angular.copy(vm.signIn)
      vm.signIn = {};
      form.$setUntouched();
      console.log('testy test',user);
      return accountFactory.signIn(user).then(function (res) {
        console.log(res);
      })

    }
    function signIn() {
      $('#storyReview').modal('hide');
      $('#storySetup').modal('hide');
      $('#warning').modal('hide');
      $('#signIn').modal('show');
    }

  }
}());
