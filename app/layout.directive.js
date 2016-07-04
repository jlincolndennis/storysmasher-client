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
    vm. smashLaunch = smashLaunch;
    vm.signIn = signIn;

    function smashLaunch() {
      console.log($location.$$path);
      if ($location.$$path !== '/') $state.go('smash')
      $('#storySetup').modal('show');
    }

    function signIn() {
      if ($location.$$path !== '/account') $state.go('account')
      $('#signIn').modal('show');
    }

  }
}());
