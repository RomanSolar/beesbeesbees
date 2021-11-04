var HoneyMakerBee = function() {
  superConstructor(HoneyMakerBee, this);
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
};
subclass(Bee, HoneyMakerBee);

Object.assign(HoneyMakerBee.prototype, {
  makeHoney: function() { this.honeyPot++; },
  giveHoney: function() { this.honeyPot--; }
});
