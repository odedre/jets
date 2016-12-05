var Jet = function (color, size) {
  this.color = color;
  this.size = size;

  this.fly = function () {
    console.log('whoosh!');
  };
  
  this.takeOff = function () {
    console.log('lift off!');
  };

  this.barrelRoll = function () {
  console.log('rolling!');
  };
};

module.exports = Jet;