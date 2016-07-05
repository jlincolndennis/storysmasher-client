(function() {
  'use strict';

  angular.module('app')
  .directive('ssAccount', accountDirective)

  function accountDirective() {
    return {
      restrict: "E",
      scope: {},
      templateUrl: '/partials/account.html',
      controller: accountController,
      controllerAs: 'vm'
    }
  }

    accountController.$inject = ['accountFactory']

    function accountController(accountFactory) {
      var vm = this;
      vm.signIn = {};
      vm.signInUser = signInUser;

      $(document).ready(function(){
          $('#signIn').modal('show');
      });


    }


}());
