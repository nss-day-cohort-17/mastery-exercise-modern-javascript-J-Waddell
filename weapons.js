var RobotBattleIsland = {};

RobotBattleIsland.Armory = {};

RobotBattleIsland.Armory.Weapon = function() {
    this.name = "missle launcher";
    this.damage = 20;
    this.arms = 2;

    this.toString = function() {
        return this.name;
    }
};

RobotBattleIsland.Armory.Minigun = function() {
    this.name = "minigun";
    this.damage = 10;
    this.arms = 1;
};

RobotBattleIsland.Armory.Minigun.prototype = new RobotBattleIsland.Armory.Weapon();

RobotBattleIsland.Armory.Plasmarifle = function() {
    this.name = "plasma rifle";
    this.damage = 16;
    this.arms = 2;
};

RobotBattleIsland.Armory.Plasmarifle.prototype = new RobotBattleIsland.Armory.Weapon();
