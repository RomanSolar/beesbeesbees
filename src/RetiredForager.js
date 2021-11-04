var RetiredForagerBee = function() {
  superConstructor(RetiredForagerBee, this);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};
subclass(ForagerBee, RetiredForagerBee);

Object.assign(RetiredForagerBee.prototype, {
  forage: () => 'I am too old, let me play cards instead',
  gamble: function(treasure) { this.treasureChest.push(treasure); }
});
