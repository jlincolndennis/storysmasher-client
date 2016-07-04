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

      function signInUser(form) {
        var user = angular.copy(vm.signIn)
        vm.signIn = {};
        form.$setUntouched();
        console.log('testy test',user);
        return accountFactory.signIn(user).then(function (res) {
          console.log(res);
        })

      }
    }


}());
