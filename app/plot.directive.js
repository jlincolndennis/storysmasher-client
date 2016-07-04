(function() {
  'use strict';

  angular.module('app')
  .directive('ssSmash', smashDirective)

  function smashDirective() {

    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/partials/smash.html',
      controller: smashController,
      controllerAs: 'vm'
    }
  }

  smashController.$inject = ['$log', '$location','$anchorScroll', 'storyFactory']
  function smashController($log, $location, $anchorScroll, storyFactory) {
    var vm = this;
    vm.user = {username: "William Swagspeare"}
    vm.menu = {step: 1, next, prev}
    vm.current = {}
    vm.current.paragraph = -1;
    vm.setting = {};
    vm.xFactor = {};
    vm.hero = {};
    vm.hero.pronoun = 'their'
    vm.pronouns = {};
    vm.plotDeets = {};
    vm.setPronouns = setPronouns;
    vm.chooseSetting = chooseSetting;
    vm.choosexFactor = choosexFactor;
    vm.startSmashing = startSmashing;
    vm.prevPara = prevPara;
    vm.nextPara = nextPara;
    // vm.currentPara = currentPara;
    vm.rollPara = rollPara;

    $(document).ready(function(){
        $('#storySetup').modal('show');
    });

    function prev() {
      vm.menu.step--
      if (vm.menu.step < 0) $('#storySetup').modal('hide');
    }

    function next() {
      vm.menu.step++
      if (vm.menu.step > 3){
        $('#storySetup').modal('hide');
        vm.startSmashing();
      }
    }

    function setPronouns() {
      // console.log(vm.hero.pronoun);
      switch (vm.hero.pronoun) {
        case 'their':
          vm.pronouns.their = 'their';
          vm.pronouns.them = 'them';
          vm.pronouns.they = 'they';
          break;
        case 'his':
          vm.pronouns.their = 'his';
          vm.pronouns.them = 'him';
          vm.pronouns.they = 'he';
          break;
        case 'her':
          vm.pronouns.their = 'hers';
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

    function startSmashing() {
      vm.current.paragraph = 1
      vm.rollPara(1);
    }

    function prevPara() {
      if (vm.current.paragraph != 1){
        vm[`paragraph${vm.current.paragraph}`] = ""
      }
      --vm.current.paragraph
      console.log(vm.current.paragraph);
      if (vm.current.paragraph < 0){
        vm.paragraph1 = ""
        vm.menu.step = 1;
        $('#storySetup').modal('show');

      }
      // $location.hash(id);
      // $anchorScroll();
    }

    function nextPara() {
      ++vm.current.paragraph
      console.log(vm.current.paragraph);

      // var id = `paragraph-${vm.current.paragraph}`;
      // $location.hash(id);
      // $anchorScroll();
      if (vm.current.paragraph > 1) rollPara()


    }
    function rollPara(para) {
      switch (vm.current.paragraph) {
        case 1:
        rollPara1();
        break;
        case 2:
        rollPara2();
        break;
        case 3:
        rollPara3();
        break;
        case 4:
        rollPara4();
        break;
        case 5:
        rollPara5();
        break;
        case 6:
        rollPara6();
        break;
        case 7:
        rollPara7();
        break;
        default:
        console.log('Invalid Paragraph');

      }

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
      vm.plotDeets.coolJob = [
        document.getElementsByClassName('pd-herojob')[0].innerHTML
      ]

      var para3Gram = {
        name: [vm.name],
        xFactor: vm.xFactor.xFactor,
        pronounThem: [vm.pronouns.them],
        pronounThey: [vm.pronouns.they],
        coolJob: vm.plotDeets.coolJob,
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

    function rollPara5() {
      vm.plotDeets.lair = [
        document.getElementsByClassName('pd-lair')[0].innerHTML
      ];
      vm.plotDeets.evilLocation = [
        document.getElementsByClassName('pd-evillocation')[0].innerHTML
      ];
      vm.plotDeets.evilLeader = [
        document.getElementsByClassName('pd-xfactorleader')[0].innerHTML
      ];
      vm.plotDeets.coolJob = [
        document.getElementsByClassName('pd-herojob')[0].innerHTML
      ]
      var plot = storyFactory.getPlot();

      var para5Gram = {
        name: [vm.name],
        pronounTheir: [vm.pronouns.their],
        xFactor: vm.xFactor.xFactor,
        lair: vm.plotDeets.lair,
        evilLocation: vm.plotDeets.evilLocation,
        evilLeader: vm.plotDeets.evilLeader,
        pronounThem: [vm.pronouns.them],
        settingMaster: vm.setting.settingMaster,
        xFactorTaunt: vm.xFactor.xFactorTaunt,
        plotTwist: plot.plotTwist,
        coolJob: vm.plotDeets.coolJob,
        settingLand: vm.setting.settingLand,
        paragraph: storyFactory.getPara('para5'),
        origin: ['#paragraph#']
      }
      var smashedPara5Grammar = tracery.createGrammar(para5Gram)
      var smashedPara5 = smashedPara5Grammar.flatten('#origin#')
      vm.paragraph5 = smashedPara5
    }

    function rollPara6() {
      var sugar = storyFactory.getSugar();
      var plot = storyFactory.getPlot();
      vm.plotDeets.evilLeader = [
        document.getElementsByClassName('pd-xfactorleader')[0].innerHTML
      ];
      vm.plotDeets.weapon = [
        document.getElementsByClassName('pd-coolweapon')[0].innerHTML
      ]

      var para6Gram = {
        evilLeader: vm.plotDeets.evilLeader,
        name: [vm.name],
        sugarCried: sugar.sugarCried,
        pronounTheir: [vm.pronouns.their],
        coolWeapon: vm.plotDeets.weapon,
        sugarYelled: sugar.sugarYelled,
        sugarSinister: sugar.sugarSinister,
        plotFight1: plot.plotFight1,
        plotFight2: plot.plotFight2,
        plotFight3: plot.plotFight3,
        pronounThey: [vm.pronouns.they],
        sugarDodged: sugar.sugarDodged,
        paragraph: storyFactory.getPara('para6'),
        origin: ['#paragraph#']
      }
      var smashedPara6Grammar = tracery.createGrammar(para6Gram)
      var smashedPara6 = smashedPara6Grammar.flatten('#origin#')
      vm.paragraph6 = smashedPara6
    }

    function rollPara7() {
      var plot = storyFactory.getPlot();
      var paragraph =[]
      vm.plotDeets.evilLeader = [
        document.getElementsByClassName('pd-xfactorleader')[0].innerHTML
      ];
      vm.plotDeets.weapon = [
        document.getElementsByClassName('pd-coolweapon')[0].innerHTML
      ];
      vm.plotDeets.corrupt =
        document.getElementsByClassName('pd-corrupt')[0]
      ;
      if(vm.plotDeets.corrupt) {
        console.log(vm.plotDeets.corrupt, 'bad');
        paragraph = storyFactory.getPara('para7evil');
      } else {
        console.log(vm.plotDeets.corrupt, 'good');
        paragraph = storyFactory.getPara('para7good');

      }

      var para7Gram = {
        pronounThey: [vm.pronouns.they],
        pronounTheir: [vm.pronouns.their],
        pronounThem: [vm.pronouns.them],
        settingMaster: vm.setting.settingMaster,
        plotHeroWins: plot.plotHeroWins,
        plotHappyEndingGood: plot.plotHappyEndingGood,
        plotHappyEndingEvil: plot.plotHappyEndingEvil,
        plotHeroLoses: plot.plotHeroLoses,
        plotTragicEnding: plot.plotTragicEnding,
        evilLeader: vm.plotDeets.evilLeader,
        name: [vm.name],
        coolWeapon: vm.plotDeets.weapon,
        xFactor: vm.xFactor.xFactor,
        paragraph: paragraph,
        origin: ['#paragraph#']
      }
      var smashedPara7Grammar = tracery.createGrammar(para7Gram)
      var smashedPara7 = smashedPara7Grammar.flatten('#origin#')
      vm.paragraph7 = smashedPara7;
    }
  }

}());
