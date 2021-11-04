var subclass = (parent, child) => {
  child.prototype = Object.create(parent.prototype);
  child.prototype.constructor = child;
};

var superConstructor = (objClass, obj, ...args) => {
  objClass.prototype.__proto__.constructor.apply(obj, args);
};
