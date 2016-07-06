(function() {
  'use strict';

  angular.module('app')
  .directive('ssListen', listenDirective)

  function listenDirective() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/partials/listen.html',
      controller: listenController,
      controllerAs: 'vm'
    }
  }

  listenController.$inject = ['accountFactory', '$stateParams', '$location', '$anchorScroll']

  function listenController(accountFactory, $stateParams, $location, $anchorScroll) {
    var vm = this;
    vm.user ={}
    vm.current = {}
    vm.current.paragraph = 0;
    vm.buttons = {start: true, sections: true, pause: false, resume: false, cancel: false}
    vm.reading = {active: false}
    vm.readStory = readStory
    vm.nextPara = nextPara;
    vm.prevPara = prevPara;
    vm.readPara = readPara;
    vm.cancelRead = cancelRead;
    vm.pauseRead = pauseRead;
    vm.resumeRead = resumeRead;
    vm.paragraphReader = paragraphReader;


    accountFactory.getStory($stateParams.id)
    .then(function (res) {
      $('.modal').modal('hide');
      vm.user.display = `by ${res.data.author}`;
      vm.story = res.data.story
  })
  function readStory() {
    vm.buttons.start = false
    vm.buttons.sections = false
    vm.buttons.pause = true;
    vm.buttons.resume = false;
    vm.buttons.cancel = true;


    var paragraph1 = document.getElementById('paragraph-1').innerText
    var msg1 = new SpeechSynthesisUtterance(paragraph1);
    window.speechSynthesis.speak(msg1);
    var paragraph2 = document.getElementById('paragraph-2').innerText
    var msg2 = new SpeechSynthesisUtterance(paragraph2);
    window.speechSynthesis.speak(msg2);
    var paragraph3 = document.getElementById('paragraph-3').innerText
    var msg3 = new SpeechSynthesisUtterance(paragraph3);
    window.speechSynthesis.speak(msg3);
    var paragraph4 = document.getElementById('paragraph-4').innerText
    var msg4 = new SpeechSynthesisUtterance(paragraph4);
    window.speechSynthesis.speak(msg4);
    var paragraph5 = document.getElementById('paragraph-5').innerText
    var msg5 = new SpeechSynthesisUtterance(paragraph5);
    window.speechSynthesis.speak(msg5);
    var paragraph6 = document.getElementById('paragraph-6').innerText
    var msg6 = new SpeechSynthesisUtterance(paragraph6);
    window.speechSynthesis.speak(msg6);
    var paragraph7 = document.getElementById('paragraph-7').innerText
    var msg7 = new SpeechSynthesisUtterance(paragraph7);
    window.speechSynthesis.speak(msg7);
  }

  function readPara() {
    vm.reading.active = true;
    var id = `paragraph-${vm.current.paragraph}`;
    var test = document.getElementById(id).innerText
    var msg = new SpeechSynthesisUtterance(test);
    window.speechSynthesis.speak(msg);
    // console.log(test);
  }

  function cancelRead () {
    vm.buttons.start = true;
    vm.buttons.sections = true;
    vm.buttons.pause = false;
    vm.buttons.resume = false;
    vm.buttons.cancel = false;
    vm.reading.active = false;
    window.speechSynthesis.cancel()
  }

  function pauseRead() {
    vm.buttons.start = false;
    vm.buttons.sections = false;
    vm.buttons.pause = false;
    vm.buttons.resume = true;
    vm.buttons.cancel = true;
    window.speechSynthesis.pause()

  }

  function resumeRead() {
    vm.buttons.start = false;
    vm.buttons.sections = false;
    vm.buttons.pause = true;
    vm.buttons.resume = false;
    vm.buttons.cancel = true;
    window.speechSynthesis.resume()

  }

  function paragraphReader() {
    vm.current.paragraph = 1
  }

  function prevPara() {
    if (vm.current.paragraph < 1) return
    vm.reading.active = false;
    --vm.current.paragraph
    var id = `paragraph-${vm.current.paragraph}`;
    $location.hash(id);
    $anchorScroll();
  }

  function nextPara() {
    if (vm.current.paragraph > 7) return
    vm.reading.active = false;
    ++vm.current.paragraph
    var id = `paragraph-${vm.current.paragraph}`;
    $location.hash(id);
    $anchorScroll();
  }


  }



}());
