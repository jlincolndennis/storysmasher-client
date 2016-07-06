(function() {
  'use strict';

  angular.module('app')
  .directive('ssStory', storyDirective)

  function storyDirective() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/smash/story.directive.html',
      controller: storyController,
      controllerAs: 'vm'
    }
  }

  storyController.$inject = ['accountFactory','$stateParams', 'currentUserService']

  function storyController(accountFactory, $stateParams, currentUserService) {
    var vm = this;
    vm.user ={}
    vm.currentUser = currentUserService.getCurrentUser();

    $('.modal').modal('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();

    accountFactory.getStory($stateParams.id)
    .then(function (res) {
      $('.modal').modal('hide');
      vm.user.display = `by ${res.data.author}`;
      vm.story = res.data.story
    })




  }

}());
