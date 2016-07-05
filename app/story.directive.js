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

  storyController.$inject = ['accountFactory','$stateParams', 'currentUserService']

  function storyController(accountFactory, $stateParams, currentUserService) {
    var vm = this;
    vm.user ={}
    // vm.saveStory = saveStory
    vm.currentUser = currentUserService.getCurrentUser();
    vm.signUpUser = signUpUser



    accountFactory.getStory($stateParams.id)
    .then(function (res) {
      if (res.data.author === 'William Swagspeare') {
        $(document).ready(function(){
            $('#storyReview').modal('show');
        });
      }
      vm.user.display = `by ${res.data.author}`;
      vm.story = res.data.story
  })

  // function saveStory(form) {
  //   console.log(form);
  // }

  function signUpUser(form) {
    var user = angular.copy(vm.signup)
    vm.signup = {};
    form.$setUntouched();
    return accountFactory.signUp(user).then(function (res) {
      var currentUser = {
        username: res.data.username,
        id : res.data.id
      }
      vm.currentUser = currentUser;
      currentUserService.setCurrentUser(currentUser)
      localStorage.setItem('jwt', res.data.jwt)
      var story = vm.story
      story.user_id = res.data.id
      story.id = $stateParams.id
      console.log('story',story);
      return accountFactory.submitStory(story).then(function (res) {
        console.log('SAVED SUCCESSFULLY');

      })
    })


  }

  }

}());
