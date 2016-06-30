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
    vm.plotDeets = {};
    vm.setPronouns = setPronouns;
    vm.chooseSetting = chooseSetting;
    vm.choosexFactor = choosexFactor;
    vm.rollPara1 = rollPara1;
    vm.rollPara2 = rollPara2;
    vm.rollPara3 = rollPara3;
    vm.rollPara4 = rollPara4;

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
    }

    function choosexFactor(xfactor) {
      vm.xFactorDisplay = xfactor
      vm.xFactor = storyFactory.getxFactor(xfactor)
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
        paragraph: storyFactory.getPara('para1'),
        origin: ['#[home:#settingHome#]paragraph#'],
      }
      var smashedPara1Grammar = tracery.createGrammar(para1Gram)
      var smashedPara1 = smashedPara1Grammar.flatten('#origin#')
      vm.paragraph1 = smashedPara1
      return
    }

    function rollPara2() {
      var sugar = storyFactory.getSugar();
      vm.plotDeets.lameJob = [
        document.getElementsByClassName('pd-lamejob')[0].innerHTML
      ]
      vm.plotDeets.home = [
        document.getElementsByClassName('pd-home')[0].innerHTML
      ]
      var para2Gram = {
        name: [vm.name],
        xFactor: vm.xFactor.xFactor,
        xFactorGroup: vm.xFactor.xFactorGroup,
        home: vm.plotDeets.home,
        lameJob: vm.plotDeets.lameJob,
        pronounTheir: [vm.pronouns.their],
        lameWeapon: vm.setting.lameWeapon,
        sugarBravely: sugar.sugarBravely,
        paragraph: storyFactory.getPara('para2'),
        origin: ['#paragraph#']
      }
      var smashedPara2Grammar = tracery.createGrammar(para2Gram)
      var smashedPara2 = smashedPara2Grammar.flatten('#origin#')
      vm.paragraph2 = smashedPara2
    }

    function rollPara3() {
      var sugar = storyFactory.getSugar();

      var para3Gram = {
        name: [vm.name],
        xFactor: vm.xFactor.xFactor,
        pronounThem: [vm.pronouns.them],
        pronounThey: [vm.pronouns.they],
        coolJob: vm.setting.coolJob,
        coolWeapon: vm.setting.coolWeapon,
        pronounTheir: [vm.pronouns.their],
        xFactorLeader: vm.xFactor.xFactorLeader,
        settingLeader: vm.setting.settingLeader,
        sugarExcuse: sugar.sugarExcuse,
        paragraph: storyFactory.getPara('para3'),
        origin: ['#[heroWeapon:#coolWeapon#][heroJob:#coolJob#][leader:#settingLeader#]paragraph#']
      }
      var smashedPara3Grammar = tracery.createGrammar(para3Gram)
      var smashedPara3 = smashedPara3Grammar.flatten('#origin#')
      vm.paragraph3 = smashedPara3
    }

    function rollPara4() {
      var sugar = storyFactory.getSugar();
      var plot = storyFactory.getPlot();
      vm.plotDeets.weapon = [
        document.getElementsByClassName('pd-coolweapon')[0].innerHTML
      ]

      var para4Gram = {
        pronounTheir: [vm.pronouns.their],
        coolWeapon: vm.plotDeets.weapon,
        name: [vm.name],
        sugarTraveled: sugar.sugarTraveled,
        settingTransport: vm.setting.settingTransport,
        xFactor: vm.xFactor.xFactor,
        sugarLair: sugar.sugarLair,
        settingEvilLocation: vm.setting.settingEvilLocation,
        pronounThey: [vm.pronouns.they],
        plotMotivation: plot.plotMotivation,
        plotJourneyChallenge: plot.plotJourneyChallenge,
        plotJourney: plot.plotJourney,
        pronounThem: [vm.pronouns.them],
        xFactorThreat: vm.xFactor.xFactorThreat,
        xFactorThreatShort: vm.xFactor.xFactorThreatShort,
        paragraph: storyFactory.getPara('para4'),
        origin: ['#paragraph#']
      }
      var smashedPara4Grammar = tracery.createGrammar(para4Gram)
      var smashedPara4 = smashedPara4Grammar.flatten('#origin#')
      vm.paragraph4 = smashedPara4
    }

    }







}());
