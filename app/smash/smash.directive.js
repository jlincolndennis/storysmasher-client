(function() {
  'use strict';

  angular.module('app')
  .directive('ssSmash', smashDirective)

  function smashDirective() {

    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/smash/smash.directive.html',
      controller: smashController,
      controllerAs: 'vm'
    }
  }

  smashController.$inject = ['$log', '$location', '$state','$anchorScroll', 'storyFactory', 'accountFactory', 'currentUserService','$scope']
  function smashController($log, $location, $state, $anchorScroll, storyFactory, accountFactory, currentUserService, $scope) {

    var vm = this;
    vm.signInInstead = signInInstead;
    vm.menu = {step: 1, next, prev}
    vm.current = {}
    vm.current.paragraph = -1;
    vm.setting = {};
    vm.xFactor = {};
    vm.setup = {};
    vm.setup.pronoun = 'their'
    vm.pronouns = {};
    vm.plotDeets = {};
    vm.setPronouns = setPronouns;
    vm.chooseSetting = chooseSetting;
    vm.choosexFactor = choosexFactor;
    vm.chooseEnding = chooseEnding;
    vm.startSmashing = startSmashing;
    vm.story = {},
    vm.prevPara = prevPara;
    vm.nextPara = nextPara;
    vm.rollPara = rollPara;
    vm.savePrompt = savePrompt;
    vm.signUpUser = signUpUser;
    vm.submitStory = submitStory;

    $(document).ready(function(){
      $location.hash();
      $('#storySetup').modal('show');
    });

    function signInInstead() {
      $('#storySetup').modal('hide');
      $('#storyReview').modal('hide');
      $('#signIn').modal('show');
    }

    function prev() {
      vm.menu.step--
      if (vm.menu.step < 0) $('#storySetup').modal('hide');
    }

    function next() {
      vm.menu.step++
      if (vm.menu.step > 4){
        $('#storySetup').modal('hide');
        vm.startSmashing();
      }
    }

    function setPronouns() {
      switch (vm.setup.pronoun) {
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
        vm.pronouns.their = 'her';
        vm.pronouns.them = 'her';
        vm.pronouns.they = 'she';
        break;
        default:
      }
    }

    function chooseSetting(setting) {
      vm.setting = storyFactory.getSetting(setting)
      vm.setup.setting  = setting;
      vm.setup.settingDisplay = vm.setting.settingMaster[0]
    }

    function choosexFactor(xfactor) {
      vm.xFactor = storyFactory.getxFactor(xfactor)
      vm.setup.xfactor = xfactor
      vm.setup.xFactorDisplay = `${vm.xFactor.xFactor[0]}s!`
    }
    function chooseEnding(ending) {
      // vm.xFactor = storyFactory.getxFactor(xfactor)
      vm.setup.ending = ending
      // vm.setup.xFactorDisplay = `${vm.xFactor.xFactor[0]}s!`
    }

    function startSmashing() {
      vm.story.title = `${vm.setup.hero} meets the ${vm.setup.xFactorDisplay}`
      vm.current.paragraph = 1
      vm.rollPara(1);
    }

    function prevPara() {
      if (vm.current.paragraph != 1){
        console.log(`paragraph_${vm.current.paragraph}`);
        vm.story[`paragraph_${vm.current.paragraph}`] = "";
      }
      --vm.current.paragraph
      console.log(vm.current.paragraph);
      if (vm.current.paragraph < 0){
        vm.story.paragraph_1 = "";
        vm.story.title = "";
        vm.menu.step = 1;
        $('#storySetup').modal('show');

      }
      var id = `paragraph-${vm.current.paragraph}`;
      $location.hash(id);
      $anchorScroll();
    }

    function nextPara() {
      ++vm.current.paragraph
      var id = `paragraph-${vm.current.paragraph}`;
      $location.hash(id);
      $anchorScroll();
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
        name: [vm.setup.hero],
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
      vm.story.paragraph_1 = smashedPara1
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
        name: [vm.setup.hero],
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
      vm.story.paragraph_2 = smashedPara2
    }

    function rollPara3() {
      var sugar = storyFactory.getSugar();
      vm.plotDeets.coolJob = [
        document.getElementsByClassName('pd-herojob')[0].innerHTML
      ]

      var para3Gram = {
        name: [vm.setup.hero],
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
      vm.story.paragraph_3 = smashedPara3
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
        name: [vm.setup.hero],
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
      vm.story.paragraph_4 = smashedPara4
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
        name: [vm.setup.hero],
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
      vm.story.paragraph_5 = smashedPara5
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
        name: [vm.setup.hero],
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
      vm.story.paragraph_6 = smashedPara6
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
        name: [vm.setup.hero],
        coolWeapon: vm.plotDeets.weapon,
        xFactor: vm.xFactor.xFactor,
        paragraph: paragraph,
        origin: ['#paragraph#']
      }
      var smashedPara7Grammar = tracery.createGrammar(para7Gram)
      var smashedPara7 = smashedPara7Grammar.flatten('#origin#')
      vm.story.paragraph_7 = smashedPara7;
    }
    function savePrompt() {
      var currentUser = currentUserService.getCurrentUser()
      if (!currentUser) {
        $('#storyReview').modal('show');
      } else {
        console.log('There is a current user!');
        vm.submitStory()
      }
    }

    function signUpUser(form) {
      var user = angular.copy(vm.signup)
      vm.signup = {};
      form.$setUntouched();
      return accountFactory.signUp(user).then(function (res) {
        var currentUser = {
          username: res.data.username,
          id : res.data.id
        }
        currentUserService.setCurrentUser(currentUser)
        localStorage.setItem('jwt', res.data.jwt)
        var story = vm.story
        story.user_id = currentUser.id
        return accountFactory.submitStory(story).then(function (res) {
          $('.modal').modal('hide');
          $state.go('story', {id: res.data.story.id}, {reload:true})
        })
      })
    }

    function submitStory() {
      var currentUser = currentUserService.getCurrentUser() || {id:1, username: 'William Swagspeare'}
      var story = vm.story;
      story.user_id = currentUser.id

      accountFactory.submitStory(story).then(function (res) {
        $('.modal').modal('hide');
        $state.go('story', {id: res.data.story.id}, {reload:true})
      })
    }
  }

}());
