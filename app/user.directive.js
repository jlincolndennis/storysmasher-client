(function() {
  'use strict';

  angular.module('app')
  .directive('ssUser', userDirective)

  function userDirective() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/partials/user.html',
      controller: userController,
      controllerAs: 'vm'
    }

  }

  userController.$inject = ['accountFactory','$stateParams']

  function userController(accountFactory, $stateParams) {
    var vm = this;
    vm.goToStory = goToStory

    accountFactory.getUser($stateParams.id)
    .then(function (res) {
      console.log(res.data.stories[0]);
      vm.user = res.data.user
      vm.stories = res.data.stories
    })

    function goToStory(id) {
      console.log(id);

    }
  }


}());
