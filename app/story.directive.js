(function() {
  'use strict';

  angular.module('app')
  .directive('ssStory', storyDirective)

  function storyDirective() {
    return {
      restrict: 'E',
      scrope: {},
      templateUrl: '/app/story.html',
      controller: storyController,
      controllerAs: 'vm'
    }
  }

  storyController.$inject = ['$log']
  function storyController($log) {

    var kingdom = {
      settingMaster: ['The Kingdom of Magic'],
      settingHome: ['The Royal City of Magic-Tania', 'The Village of Forest Glenn', 'The Blight Lands of Rhahguhn'],
      settingLand: ['realm', 'countryside', 'land'],
      lamejob: ['stable mucker', 'royal silver polisher', 'poopsmith'],
      cooljob: ['Knight of the Realm', 'Mighty Wizard', 'Dashing Outlaw']
    }

    var space = {
      settingMaster: ['Space Station X-99'],
      settingHome: ['Habitation Module 1138', 'LifePod Alpha', 'HomeNode BL33T'],
      settingLand: ['galaxy', 'interstellar seas','stars'],
      lamejob: ['Space Janitor', 'HyperDrive Waste Collector', 'Viewport Washer'],
      cooljob: ['Star Pilot', 'Space Marine', 'Quaser Jumper']
    }



    var vm = this;
    vm.coolWord = 'Butt';
    vm.hero = 'Lincoln';
    vm.pronoun = 'their';
    vm.setting = 'Lame Town';
    vm.xfactor = 'Republican';
    vm.settingPicker = settingPicker;
    vm.xfactorPicker = xfactorPicker;
    vm.smash = smash;
    vm.smashedStory = "";
    vm.world = kingdom;

    function settingPicker(setting) {
      if (setting === 'space'){
        vm.setting = 'Space Station X-99';
        vm.world = space;
        console.log(vm.world.settingMaster);
        return
      } else if (setting ==='kingdom'){
        vm.setting = 'The Kingom of Magic';
        vm.world = kingdom;
        console.log(vm.world.settingMaster);
        return
      }
    }

      function xfactorPicker(x) {
        if (x === 'dinos'){
          vm.xfactor = 'Dinosaur'
          console.log(vm.xfactor);
          return
        } else if (x ==='ninjas'){
          vm.xfactor = 'Ninja'
          console.log(vm.xfactor);
          return
        }
    }

    var testGram = {


      story: ['#name# lived in #settingHome#, part of #settingMaster#, but it wasn\'t as exciting as one would think. #name# was but a lowly #lamejob#. In #pronoun# dreams, however, #name# was a #cooljob# and traveled across the #settingLand#. But those were just dreams. #name# would never leave #settingHome#, and probably never even see a fabled #xfactor#.']
    }

    function smash() {
      testGram.name = [vm.hero];
      testGram.settingMaster = vm.world.settingMaster;
      testGram.pronoun = vm.pronoun;
      testGram.settingHome = vm.world.settingHome;
      testGram.settingLand = vm.world.settingLand;
      testGram.lamejob = vm.world.lamejob;
      testGram.cooljob = vm.world.cooljob;
      testGram.xfactor = [vm.xfactor];
      var smashedGram = tracery.createGrammar(testGram);
      var smashedStory = smashedGram.flatten('#story#')
      console.log(smashedStory);
      vm.buhbye = true;
      vm.storytime = true;
      return vm.smashedStory = smashedStory;
    }

  }



}());
