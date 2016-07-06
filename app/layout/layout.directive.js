(function() {
  'use strict';

  angular.module('app')
  .directive('ssApp', layoutDirective)


  function layoutDirective() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/layout/layout.directive.html',
      controller: layoutController,
      controllerAs: 'vm'
    }
  }

  layoutController.inject =['$log','$location', '$state','accountFactory','currentUserService', '$stateParams']

  function layoutController($log, $location, $state, accountFactory, currentUserService, $stateParams) {
    var vm = this;
    vm.menuLaunch = menuLaunch;
    vm.mobile = {menu: false}
    vm.smashLaunch = smashLaunch;
    vm.signInLaunch = signInLaunch;
    vm.listenLaunch = listenLaunch;
    vm.currentUser = currentUserService.getCurrentUser();
    vm.signIn = {}
    vm.signInUser = signInUser;
    vm.readLaunch = readLaunch;
    vm.launchUser = launchUser;
    vm.signOut = signOut;
    vm.show = {}
    vm.state = {name: $state.current.name}

    setButtons()

    function setButtons() {
      switch (vm.state.name) {
        case 'listen':
        vm.show.read = true;
        vm.show.listen = false;
        break;

        case 'story':
        vm.show.read = false;
        vm.show.listen = true;
        break;

        default:
        vm.show.read = false;
        vm.show.listen = false;

      }
    }

    function menuLaunch() {
      vm.mobile.menu = !vm.mobile.menu;
    }

    function smashLaunch() {
      vm.mobile.menu = false;
      if ($location.$$path !== '/') $state.go('smash', {}, {reload:true})
      $('#storySetup').modal('show');
    }

    function readLaunch() {
      vm.mobile.menu = false;
      $state.go('story', {id: $stateParams.id}, {reload:true})
    }

    function launchUser(){
      vm.mobile.menu = false;
      $state.go('user', {id: vm.currentUser.id}, {reload:true})
    }

    function listenLaunch() {
      vm.mobile.menu = false;
      $state.go('listen', {id: $stateParams.id}, {reload:true})
    }

    function signOut() {
      vm.mobile.menu = false;
      vm.currentUser = {}
      currentUserService.setCurrentUser(null);
      localStorage.removeItem('jwt');
    }

    function signInUser(form) {
      vm.mobile.menu = false;
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
      vm.mobile.menu = false;
      $('#storyReview').modal('hide');
      $('#storySetup').modal('hide');
      $('#signIn').modal('show');
    }

  }
}());
