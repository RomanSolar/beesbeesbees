var ForagerBee = function() {
  superConstructor(ForagerBee, this);
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};
subclass(Bee, ForagerBee);

ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
};
