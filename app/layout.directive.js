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

  layoutController.inject =['$log']

  function layoutController($log) {
    var vm = this;
    vm. smashLaunch = smashLaunch
    $log.log('Hello form layout directive')

    function smashLaunch() {
      $('#storySetup').modal('show');

    }

  }
}());
