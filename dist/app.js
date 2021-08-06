"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fn = function fn(a, b) {
  return a + b;
};

fn(2, 3);

var Players = function Players() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  _classCallCheck(this, Players);

  var name = obj.name,
      team = obj.team;
  this.name = name;
  this.team = team;
};

;
var player = new Players({
  name: 'Sergio Ramos',
  team: 'PSG'
});
console.log(player);