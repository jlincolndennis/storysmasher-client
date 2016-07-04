(function() {
  'use strict';

  angular.module('app')
  .directive('ssStory', storyDirective)

  function storyDirective() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/partials/story.html',
      controller: storyController,
      controllerAs: 'vm'
    }
  }

  storyController.$inject = ['accountFactory','$stateParams']

  function storyController(accountFactory, $stateParams) {
    var vm = this;
    accountFactory.getStory($stateParams.id)
    .then(function (res) {
      console.log(res);
      vm.story = res.data.story

    })

  }

}());
