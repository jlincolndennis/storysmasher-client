(function() {
  'use strict';

  angular.module('app')
    .factory('storyFactory', storyFactory);

    storyFactory.$inject = ['$log']

    function storyFactory($log) {
      // worlds
      var kingdom = {
        settingMaster: ['The Kingdom of Magic'],
        settingHome: ['The Royal City of Magic-Tania', 'The Village of Forest Glenn', 'The Blight Lands of Rhahguhn', 'Hag\'s Bay, a fishing village'],
        settingLand: ['realm', 'countryside', 'land', 'country'],
        lameJob: ['stable mucker', 'royal silver polisher', 'poopsmith', 'bustle stuffer'],
        lameWeapon: ['pitchfork', 'broom', 'poop shovel', 'bustle stuffing device'],
        coolJob: ['Knight of the Realm', 'Wizard Supreme', 'Dashing Outlaw'],
        coolWeapon: ['broadsward', 'staff', 'cutlass'],
        settingLeader: ['Richard The Wise', 'Greta The Great', 'Hawk Lord', 'The Lady of the Stars', 'Greenback Morgan', 'Tristram the Great', 'The Black Jay', 'Duke Grayhound', 'Lady Jessica'],
        settingTransport: ['on a majestic steed', 'on a brand spankin\' new horse', 'on their journey', 'without looking back', 'with haste'],
        settingEvilLocation: ['on the aptly named Mount Evil', 'on the ironically-named Mount Actually-Pretty-Nice','deep in the Murky Woods', 'on the barren wastes of the Dead Plains', 'deep in the Caves of Woe', 'behind the walls of the Iron Keep', 'hidden in the Viridian Jungle', 'on the rocky shores of Witch\'s Bay']
      }
      var space = {
        settingMaster: ['Space Station X-99'],
        settingHome: ['Habitation Module 1138', 'LifePod Alpha', 'HomeNode BL33T', 'Crew Quarters Section G20'],
        settingLand: ['galaxy', 'interstellar seas','stars', 'universe', 'vast expances of space'],
        lameJob: ['Space Janitor', 'HyperDrive Waste Collector', 'Viewport Washer'],
        lameWeapon: ['Space Broom', 'Sonic Shovel', 'Laser Squeegee'],
        coolJob: ['Star Pilot', 'Space Marine', 'Quaser Jumper', 'Bounty Hunter'],
        coolWeapon: ['Laser Sword', 'Plasma Rifle', 'Ion Blade'],
        settingLeader: ['Captain Corona', 'Captain Beauregard', 'Pon Danfore', 'Tracer Comet', 'Flash Starscream', 'Rikki Moonrise','Carol Warpjet', 'Jana Jupiter', 'Kax Katrina'],
        settingTransport: ['in a star sleek fighter', 'in a solar sailboat', 'on the back of a majestic space whale named Kevin', 'on their journey', 'with haste', 'in a transport pod' ],
        settingEvilLocation: ['on Planet X', 'on the Death Moon of Vega Prime', 'on the Crystal Planet of Quarton', 'aboard their starship Exterminator', 'deep in a black hole', 'hidden in the Magenta Nebula', 'a secret space station hidden in the rings of planet Protaxia', 'in the gas mines of Planet Vim']
      }
      var western = {
        settingMaster: ['Whiskey Gulch'],
        settingHome: ['a shack', 'a rented room above the stables', 'in a hayloft on the outskirts of town'],
        settingLand: ['territory', 'plain', 'countryside', 'prarie'],
        lameJob: ['spittoon emptier', 'outhouse cleaner', 'boot shiner', 'saddle waxer'],
        lameWeapon: ['mop', 'shovel', 'rag'],
        coolJob: ['sherrif', 'rugged traveler', 'feared gunslinger'],
        coolWeapon: ['six shooter', 'Colt revolver', 'double-barreled shotgun'],
        settingLeader: ['Tex Tengallon', 'Miss Kiki', 'Luke Montoya', 'The Faceless Drifter', 'Ol\' Doc Monday', 'The Killer Queen', 'Gutshot Jenny', 'Buckshot Barnes'],
        settingTransport: ['on big, black mustang', 'driving a swift wagon', 'without looking back', 'on foot', 'as the sun set'],
        settingEvilLocation: ['out past Old Miner\'s Road', 'on the other side of Clayton Ravine', 'deep in Dead Man\'s Canyon', 'across Bootstrap River', 'up in the Hills of Coronado Territory']
      }

      //xFactors
      var ninjas = {
        xFactor: ['Ninja'],
        xFactorGroup: ['assassins', 'warriors', 'clan'],
        xFactorLeader: ['Silent Scorpion', 'Swift Jade', 'Silent Dragon', 'Iron Eagle'],
        xFactorTaunt: ['"And there is nothing you can do to stop me!', 'And you shall pay for sending me into exile!"', '"And I shall be the greatest warrior in the land!"', '"Prepare to meet your doom!"', '"Do you really think you can defeat me?"', '"And finally my blade will find rest."', '"And at last my clan will have their revenge!"'],
        xFactorThreat: ['a roving band of ninja scouts'],
        xFactorThreatShort: ['the ninjas']
      }
      var dinosaurs = {
        xFactor: ['Dinosaur'],
        xFactorGroup: ['horde', 'stampede', 'army'],
        xFactorLeader: ['Tyrone Rex', 'Broken Claw', 'Kruk-Mawr', 'Jim', 'King Dyno', 'Terror-adon', 'T-WRECKZ', 'Kill-A-Vore'],
        xFactorTaunt: ['"RRRAAAAAAARRRRRRR"', '"And you will be the ones who are extinct!', 'The Age of Dinosaurs Begins Again!"', '"And All Mammals Will Bow Before Us!"', '"And all of your palentologists will be out of a job!"', '"And no one will make fun of my tiny arms again!"'],
        xFactorThreat: ['a pack of velociraptor warriors'],
        xFactorThreatShort: ['the raptors.']
      }
      var lovecraft = {
        xFactor: ['Great Old One'],
        xFactorGroup: ['Ammutseba, Devourer of Stars', 'Basatan, Master of the Crabs', 'Bokrug, The Great Water Lizard, The Doom of Sarnath', 'Eihort, The Pale Beast, God of the Labyrinth', 'Mormo, The Thousand-Faced Moon'],
        xFactorLeader: ['Cthulhu'],
        xFactorTaunt: ['And then Cthulhu, The One of Eternal Darkness let forth a sound of which no man had ever heard and to describe in any mortal words would surely drive you, dear reader, shreiking into the arms of madness.', 'And with that, Cthulhu, Seer of All and Knower of More, brought forth a darkness over the world that removed the very memory of light from all good people\'s minds.', 'And what happened next, dear reader was indescribable by any human tongue that ever had been or ever will be invented and to even think of it now is to invite the sweet release of insanity into our lives.'],
        xFactorThreat: ['Kassogtha, Bride of Cthulhu, The Leviathan of Diseases'],
        xFactorThreatShort: ['Kassogtha']
      }

      var sugar = {
        sugarMighty: ['mighty', 'powerful', 'brave', 'famous', 'ridiculously attractive'],
        sugarWent: ['had adventures', 'travelled', 'journeyed', 'was known', 'brought excitement'],
        sugarTraveled: ['departed', 'set out', 'embarked', 'left' ],
        sugarExcuse: ['I must stay and help rebuild.', 'The attack has left me wounded, or I would join you.', 'I would go, but, like, its really far. And I am pretty tired, ya know?','I cannot join you, for my wife was injured and I must stay with her.', 'I cannot join you, for my husband was injured and I must stay with him.', 'I would join you, but I had a really big lunch, and you know what they say: Don\'t fight evil for at least an hour after eating. Or is that for swimming? Whatevs, you\'ll be fine kid.'],
        sugarBravely: ['bravely', 'valiantly', 'courageously', 'tenaciously', 'with great heart', 'resourcefully', 'tirelessly'],
        sugarLair: ['lair', 'hideout', 'stronghold', 'base'],
        sugarCried: ['cried', 'yelled', 'said', 'commanded', 'shouted'],
        sugarYelled: ['bellowed', 'roared', 'said', 'answered', 'replied'],
        sugarSinister: ['sinister', 'evil', 'dark', 'nightmare', 'feasome', 'loathsome', 'ornate'],
        sugarDodged: ['doged', 'evaded','narrowly avoided', 'just escaped', 'easily sidestepped', 'struggled to evade']
      }

      var plot = {
        plotMotivation: ['a desire for vengance!','a heart full of rage!', 'a need for justice!', 'a burning thirst for revenge!', 'the memories of his lost home.', 'dreams of glory.', 'sadness over the fate of #pronounTheir# home.', 'wonder.'],
        plotJourneyChallenge: ['Partway into #pronounTheir# trek, #name# became hoplessly lost! For days, #name# wandered in circles, ruing the time wasted. Finally, #name# was able to use the stars to navigate, and find #pronounTheir# way again.', 'About halway through #pronounTheir# journey, #name# was ambushed by #xFactorThreat#! It was only #name#\'s quick thinking and steady hand that allowed #pronounThem# to defeat the #xFactorThreatShort# quickly and without injury.'],
        plotJourney: ['#plotJourneyChallenge# #name# rested just long enough to regain #pronounTheir# focus, then #pronounThey# continued on!','Luckily the journey was without incident.'],
        plotTwist: ['<br>"Let\'s get right to it! The fighting, I mean," #name# said.<br>', '<br>#name# felt #pronounTheir# anger boiling inside #pronounThem#. #evilLeader# didn\'t deserve to live! #name# would put and end to the #xFactor# and to anyone else who got in #pronounTheir#\'s way. In fact, #name# wouldn\'t stop until the whole world submitted to #pronounTheir# <span class="pd-corrupt">rule</span>!', '<br>"Your coming was foretold by the Prophecy," #evilLeader# said, "It states only the greatest #coolJob# in the #settingLand# would come to face me."<br><br>"So, I <em>am</em> a #coolJob#!" #name# whispered.'],
        plotFight1: ['#evilLeader# lunged at #name#, but #name# was faster. Spinning around, #name# attacked with #pronounTheir# #coolWeapon#. #evilLeader# staggered back.', '#name# and #evilLeader# were locked in combat, two warriors at their best. Who would make the fatal mistake and award their foe the victory?', '#name# attacked with their #coolWeapon# but #evilLeader# #sugarDodged# the attack.' ],
        plotFight2: ['#evilLeader# was fast, but #name# was faster.', '#name# fought relentlessly, but #evilLeader# never seemed to tire. #name# did not know how much longer #pronounThey# could hold out.', '#name# landed attack after attack. It was as if #coolWeapon# was an extension of #pronounTheir# body. The #coolWeapon# sang a deadly song.', 'The battle dragged on, neither foe willing to yeild!', 'It was a battle that would do down in the annals of history!', 'Had their ever been two more fearsome warriors than #name# and #evilLeader#?'],
        plotFight3: ['#name# gained the upper hand! #evilLeader# was weak and #name# readied #pronounTheir# final strike!',' <br><br>#evilLeader# laughed,"You can never defeat me!"<br><br>"Watch me!" #name# cried.', '#name# could barely hold up #pronounTheir# #coolWeapon#. Defeat seemed unavoildable. Exhausted, #name# summoned all #pronounTheir# strength for one, final attack.']
      }

      // paragraphs
      var para1 = ['#name# lived in <span class="pd-home">#home#</span>, in #settingMaster#, but it wasn\'t as exciting as one would think. #name# was but a lowly <span class="pd-lamejob">#lameJob#</span>. In #pronounTheir# dreams, however, #name# was a #sugarMighty# <span class="pd-herojob">#coolJob#</span> and #sugarWent# across the #settingLand#. But those were just dreams. #name# feared #pronounThey# would never leave #home#, and probably never even see a fabled #xFactor#.'];

      var para2 =['But adventure, as it often does, came to #name#! The #xFactor# <span class="pd-xfactorgroup">#xFactorGroup#</span> was attacking #home#! Despite being just a #lameJob#, #name# picked up #pronounTheir# #lameWeapon# and fought back! #name# fought #sugarBravely#, but it wasn\'t enough, and sadly #home# was pillaged and left in ruins.'];

      var para3 = [
        'When the smoke cleared, #name# saw nothing but destruction all around #pronounThem#. Every one and thing #pronounThey# had ever known was gone. #name# was all the remained.<br><br>Sticking out of the rubble, #name# saw a <span class="pd-coolweapon">#heroWeapon#</span>, the weapon of a <span class="pd-cooljob">#heroJob#</span>! #name# knew what #pronounThey# must do, avenge #pronounTheir# home and challenge <span class="pd-xfactorleader">#xFactorLeader#</span>, leader of the #xFactor#!',
        'As the smoke cleared #name# saw a figure approaching. It was #leader#, a <span class="pd-cooljob">#heroJob#</span>!<br><br>"#name#!" #leader# said. "You fought well. There are not many survivors. You must go and avenge our people! #sugarExcuse# Here, it\'s dangerous to go alone! Take this!"<br><br> #leader# handed #name# a <span class="pd-coolweapon">#heroWeapon#</span>.<br><br>"Go. Confront <span class="pd-xfactorleader">#xFactorLeader#</span>, leader of the #xFactor#! Avenge our people!"',
        'When the smoke cleared, #name# saw nothing but destruction all around #pronounThem#. Sticking out of the rubble, #name# saw a <span class="pd-coolweapon">#heroWeapon#</span>, the weapon of a <span class="pd-cooljob">#heroJob#</span>! #pronounThey# picked it up. As #pronounThey# did, a survivor came towards #pronounThem#.<br><br>"You are a #heroJob#?" they asked #name#.<br><br>"Well... I..." #name# said.<br><br>"Please, good hero, avenge our people. Confront <span class="pd-xfactorleader">#xFactorLeader#</span>, leader of the #xFactor#!"<br><br>#name# looked into the eyes of the survivor. "I will make the #xFactor# pay!" #name# said.'
      ];

      var para4 = ['Armed with #pronounTheir# new #coolWeapon#, #name# #sugarTraveled# #settingTransport#. #pronounTheir# destination? The #xFactor# <span class="pd-lair">#sugarLair#</span>, <span class="pd-evillocation">#settingEvilLocation#</span>. It would be a long journey, farther than #name# had ever ventured, but #pronounThey# was filled with #plotMotivation# #plotJourney#'];

      var para5 = [
        'It was a long journey, but finally, #name# arrived at the #xFactor# #lair# #evilLocation#. #evilLeader# was waiting for #pronounThem#!<br><br> "Soon all of #settingMaster# will be mine!" #evilLeader# said, #xFactorTaunt#<br><br>#plotTwist#'
      ]

      var para6 = ['"#evilLeader#!", #name# #sugarCried# drawing #pronounTheir# #coolWeapon#, "Let us end this now."<br><br>"My thoughts exactly!" #evilLeader# #sugarYelled#, drawing their own, #sugarSinister# #coolWeapon#. <br><br>#plotFight1# #plotFight2# #plotFight3#'];

      var para7good = ['#heroWins#. #evilLeader# was defeated. #heroWinsEnding#', '#heroLoses#. #evilLeader# laughed as #name# collapsed, exhausted and beaten. #heroLosesEnding#.']

      var para7evil = ['#heroWins#. #evilLeader# was defeated. #heroWinsEnding#', '#heroLoses#. #evilLeader# laughed as #name# collapsed, exhausted and beaten. #heroLosesEnding#.']

      return {
        getSetting, getxFactor, getSugar, getPlot, getPara,
      }

      function getSetting(setting) {
        switch (setting) {
          case 'space':
            return space
            break;
        case 'kingdom':
          return kingdom
          break;
        case 'western':
          return western
          break;
        default:
          console.log('Unknown setting selected!');
        }
      }

      function getxFactor(xfactor) {
        switch (xfactor) {
          case 'ninjas':
            return ninjas
            break;
        case 'dinosaurs':
          return dinosaurs
          break;
        case 'lovecraft':
          return lovecraft
          break;
        default:
          console.log('Unknown xfactor selected!');
        }
      }

      function getSugar() {
        return sugar
      }
      function getPlot() {
        return plot
      }

      function getPara(para) {
        switch (para) {
          case 'para1':
          return para1
          break;

          case 'para2':
          return para2
          break;

          case 'para3':
          return para3
          break;

          case 'para4':
          return para4
          break;

          case 'para5':
          return para5
          break;

          case 'para6':
          return para6
          break;

          case 'para7good':
          return para7good
          break;

          case 'para7evil':
          return para7evil
          break;

          default:
          console.log('unknown paragraph selected');

        }
      }

    }
}());
