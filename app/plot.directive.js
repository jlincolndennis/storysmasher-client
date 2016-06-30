(function() {
  'use strict';

  angular.module('app')
  .directive('ssPlot', plotDirective)

  function plotDirective() {

    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/partials/plot.html',
      controller: plotController,
      controllerAs: 'vm'
    }
  }

  plotController.$inject = ['$log', 'storyFactory']
  function plotController($log, storyFactory) {
    var vm = this;
    vm.setting = {};
    vm.xFactor = {};
    vm.pronouns = {};
    vm.setPronouns = setPronouns;
    vm.chooseSetting = chooseSetting;
    vm.choosexFactor = choosexFactor;
    vm.rollPara1 = rollPara1;

    function setPronouns() {
      switch (vm.pronouns.their) {
        case 'their':
          vm.pronouns.them = 'them';
          vm.pronouns.they = 'they';
          break;
        case 'his':
          vm.pronouns.them = 'him';
          vm.pronouns.they = 'he';
          break;
        case 'her':
          vm.pronouns.them = 'her';
          vm.pronouns.they = 'she';
          break;
        default:

      }

    }

    function chooseSetting(setting) {
      vm.settingDisplay = setting
      vm.setting = storyFactory.getSetting(setting)
      console.log('vm.setting is', vm.setting);
    }

    function choosexFactor(xfactor) {
      vm.xFactorDisplay = xfactor
      vm.xFactor = storyFactory.getxFactor(xfactor)
      console.log('vm.xFactor is', vm.xFactor);
    }

    function rollPara1() {
      var sugar = storyFactory.getSugar();
      setPronouns();
      var para1Gram = {
        name: [vm.name],
        pronounThey: [vm.pronouns.they],
        pronounTheir: [vm.pronouns.their],
        settingMaster: vm.setting.settingMaster,
        lameJob: vm.setting.lameJob,
        sugarMighty: sugar.sugarMighty,
        coolJob: vm.setting.coolJob,
        sugarWent: sugar.sugarWent,
        settingLand: vm.setting.settingLand,
        settingHome: vm.setting.settingHome,
        xFactor: vm.xFactor.xFactor,
        origin: ['#[home:#settingHome#]paragraph#'],
        paragraph: storyFactory.getPara('para1')
      }

      var smashedPara1Grammar = tracery.createGrammar(para1Gram)
      var smashedPara1 = smashedPara1Grammar.flatten('#origin#')
      console.log(smashedPara1);
      vm.paragraph1 = smashedPara1


    }
  }



}());
