RobotBattleIsland.Combatants.robotTwo = function() {
    this.health = this.health + 20;
    this.species = "Robot"
    this.allowedClasses = ["ATV", "Drone", "War Machine"];

    this.generateClass = function() {
        var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

        var randomClass = this.allowedClasses[random];

        this.class = new RobotBattleIsland.GuildHall[randomClass]();
        return this.class;
    }
};

RobotBattleIsland.Combatants.robotTwo.prototype = new RobotBattleIsland.Combatants.RobotTwo();
