var namesArr = ['Bob', 'Jim The Fish', 'Sally']


var grammar = {
  name: namesArr,
  go: ['traveled', 'journeyed', 'went'],
  place: ['the store', 'France', 'HELL'],
  sidekick: ['squirrel', 'goat', 'child'],
  sidekickMod: ['talking', 'glowing', 'invisible'],
  story: ['#[hero:#name#][friend:#sidekickMod# #sidekick#]plot#'],
  plot: ['#hero# #go# to #place#. Along the way, #hero# found #friend.a#! "What a strange #friend#!" #hero# cried.']
}

// console.log("hello from grammar");
$(document).ready(function() {
  function loadCoolWord() {
    var wordGram = tracery.createGrammar(coolWord);
    var chosenWord = sample.flatten("#word#")
  }

  function loadGrammar() {
    var sample = tracery.createGrammar(grammar);
    var story = sample.flatten("#story#");
    var p = $("<p/>", {
        class : "outputSample",
        html : story
    });
    // console.log(story);
    $("#sample").append(p);
    return
  }
  setTimeout(function() {
    var s = loadGrammar()
  }, 10);

  // console.log(s);






});
