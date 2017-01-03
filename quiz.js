var newRobot;

var newRobotName;

var newRobotClass;


      var robotTwo = new RobotBattleIsland.Combatants.robotTwo();
      robotTwo.generateClass();
      robotTwo.setWeapon(new RobotBattleIsland.Armory.Broadsword());



// console.log(Gauntlet.)

$(document).ready(function() {
  /*
    Show the initial view that accepts player name
   */
  $("#player-setup").show('slow');

  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */

   // $('#matrixTheme').click(function (e) {
   //  $('.matrixBg-matrix').toggleClass('matrixBg');
   //  $('.characterBg-matrix').toggleClass('characterBg');
   //  $('.weaponBg-matrix').toggleClass('weaponBg');
   //  $('.classBg-matrix').toggleClass('classBg');
   //  // $('.card--battleground').addClass('matrix-battleground');
   // })

  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;

     newRobotName = $('#player-name').val();

      switch (nextCard) {
      case "card--character":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--weapon":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--class":
        moveAlong = ($("player-name").val() !== "");
        newRobot = new RobotBattleIsland.Combatants.Player(newRobotName);
        console.log(newRobot)
        break
      case 'card--battleground':
        moveAlong = ($("#player-name").val() !== "");

        break;

    }


    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show('slow');

    }

    if (e.target.id === 'defeatLink' || e.target.id === "defeat" || e.target.className === 'btn__text span-defeat') {

      $('.card--battleground').show('slow');

      $('.card--weapon').hide();

      if ($('.weaponBg-matrix').hasClass('weaponBg')) {
        $('body').addClass('matrix-battleground');

      } else {

      $('body').addClass('battleground-body');

      }

    var startingHealth = newRobot.health + newRobot.species.healthBonus

    var enemyHealth = robotTwo.health;

   $('#health').val(startingHealth);

   $('#enemyHealth').val(enemyHealth);


   document.getElementById('myInfo').innerHTML = `Name: ${newRobot.newRobotName} Type: ${newRobot.species.name} Weapon: ${newRobot.weapon.name}`
   document.getElementById('enemyInfo').innerHTML = `Enemy Type: ${robotTwo.class.name} Weapon: ${robotTwo.weapon.name}`


      // console.log(newPlayer);
      // console.log(orc)

          $('.battle-screen').hide();
          $('.versus-screen').html(`${newRobot.newRobotName} VS ${robotTwo.class.name}`)

      setTimeout(function() {
          $('.versus-screen').hide();
          $('.battle-screen').show();
          battle();
      }, 7000)


   }



  });


  $(".class__button").click(function(e) {
    if ($(this).hasClass('stealthClass') === true) {
      $('#character-select').show('slow');
      $('#classSelect').hide();
      $('.fighter').hide();
      $('.magical').hide();
      $('.stealth').show();
    }
    if ($(this).hasClass('fighterClass') === true) {
      $('#character-select').show('slow');
      $('#classSelect').hide();
      $('.fighter').show();
      $('.magical').hide();
      $('.stealth').hide();
    }
    if ($(this).hasClass('magicalClass') === true) {
      $('#character-select').show('slow');
      $('#classSelect').hide();
      $('.fighter').hide();
      $('.magical').show();
      $('.stealth').hide();
    }
  })


  $('.type').click(function (e) {
    var typeText = this.innerText.slice(1);
    var newTypeText = typeText.toLowerCase();
    newTypeText = newTypeText.charAt(0).toUpperCase() + newTypeText.slice(1);
    newRobot.species = new RobotBattleIsland.GuildHall[newTypeText];
  })

 $('.weapon__button').click(function (e) {
    var typeText = this.innerText.slice(2);
    var newTypeText = typeText.toLowerCase();
    newTypeText = newTypeText.charAt(0).toUpperCase() + newTypeText.slice(1);
    if (newTypeText === 'Barehands') {
      newRobot.weapon = new RobotBattleIsland.Armory.Weapon;
    } else {
    newRobot.weapon = new RobotBattleIsland.Armory[newTypeText];
    }
  })


  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });



});

var damageInflicted;
var damageReceived;
var attack;

  function inflictDamage() {
//healthpoints is health plus healthbonus which can be negative
  var healthPoints = newRobot.health + newRobot.species.healthBonus;

    //damage to enemy is ((strength + strengthBonus) divided by weapon damage)
    // times 2
    var damageInflicted = ((newRobot.species.strengthBonus +
    newPlayer.strength) / (newRobot.weapon.damage)) * 2;

//damage received is same formula for given, will change based on chars of
//enemy
    // var damageReceived = orc.weapon / whatever

    robotTwo.health = robotTwo.health - newRobot.weapon.damage

    $('#enemyHealth').val(robotTwo.health)
    $('#attackBtn').prop('disabled', true);
    setTimeout(function() {
      $('#attackBtn').prop('disabled', false);
    }, 1200)

    var attackSuccess = newRobot.intelligence;

 if (healthPoints === 0) {
  $("#attackBtn").button("disable");
  alert("Better luck next time, loser");
 // } else if {

  }
}

$("#attackBtn").click(inflictDamage);


// orc attack once battle starts

function endGame () {
  if (newRobot.health <= 0) {
    $('.card--battleground').html(`<button class="btn btn-danger col-md-offset-8" id="exitBtn" role="button" type="button">Play Again</button>
                                  <div class='youLose versus fight'>${robotTwo.class.name} WINS<br>YOU LOSE</div>`)
  } else if (robotTwo.health <= 0) {

    $('.card--battleground').html(`<button class="btn btn-danger col-md-offset-8" id="exitBtn" role="button" type="button">Play Again</button>
                                  <div class='youWin versus fight'>${newRobot.playerName} WINS!</div>`)
  }

  $('#exitBtn').click(function (e){
    location.reload()
})

}

function battle () {

  // hide vs screen

function robotTwoAttack() {
  if ($('body').hasClass('matrix-battleground')) {
      $('.battle-screen').addClass('battle-screen-hit-matrix');
  setTimeout(function () {
    $('.battle-screen').removeClass('battle-screen-hit-matrix');
      endGame();

  }, 500);
  } else {

  $('.battle-screen').addClass('battle-screen-hit');
  setTimeout(function () {
    $('.battle-screen').removeClass('battle-screen-hit');
      endGame();

  }, 500);
  }

  newRobot.health = newRobot.health - robotTwo.weapon.damage

  $('#health').val(newRobot.health)

}

(function loop() {
    var rand = Math.round(Math.random() * (3000 - 500)) + 1000;
   if (robotTwo.health > 0) {setTimeout(function() {
            robotTwoAttack();
            loop();
    }, rand); } else {
      endGame()
   }

}());



}
