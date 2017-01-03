var RobotBattleIsland = RobotBattleIsland || {};
RobotBattleIsland.Combatants = {};

/*
  Define the base object for any player of Gauntlet,
  whether a human player or a monster.
 */

RobotBattleIsland.Combatants.Player = function(name) {
  this.species = null;
  this.class = null;
  this.weapon = null;

  this.playerName = name || "unknown robot";
  this.health = Math.floor(Math.random() * 40 + 50);
  this.skinColor = "gray";
  this.skinColors = [this.skinColor];
  this.strength = 100;
  this.intelligence = 100;

  this.toString = function() {
    var output = [this.robotName,
      ": a ",
      this.skinColor,
      " skinned ",
      this.species,
      " ",
      this.class,
      " with ",
      this.health,
      " health. ",
      (this.class.magical) ? "Able to cast " : " Wielding a ",
      this.weapon.toString(),
      "!"
    ].join("");
    return output;
  };
};

RobotBattleIsland.Combatants.Player.prototype.setWeapon = function(newWeapon) {
  this.weapon = newWeapon;
}

RobotBattleIsland.Combatants.Player.prototype.generateClass = function() {
  // Get a random index from the allowed classes array
  var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

  // Get the string at the index
  var randomClass = this.allowedClasses[random];

  // Composes the corresponding player class into the player object
  this.class = new RobotBattleIsland.GuildHall[randomClass]();

  // Add the health bonus
  this.health += this.class.healthBonus;
  return this.class;
};

/*
  Define the base properties for a human in a
  constructor function.
 */
RobotBattleIsland.Combatants.Robot = function() {
  var randomSkin;

  this.species = "Robot";
  this.intelligence = this.intelligence + 20;

  this.skinColors.push("brown", "red", "white");
  randomSkin = Math.round(Math.random() * (this.skinColors.length-1));
  this.skinColor = this.skinColors[randomSkin];

  this.allowedClasses = ["Warrior", "Berserker", "Valkyrie", "Monk"];
};
RobotBattleIsland.Combatants.Robot.prototype = new RobotBattleIsland.Combatants.Player();

/*
  Define the base properties for a monster in a
  constructor function.
 */
RobotBattleIsland.Combatants.RobotTwo = function() {
  this.health = this.health - 30;
  this.intelligence = this.intelligence -20;
  this.strength = this.strength + 30;
};

RobotBattleIsland.Combatants.RobotTwo.prototype = new RobotBattleIsland.Combatants.Player();
