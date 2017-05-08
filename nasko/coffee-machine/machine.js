function CoffeeMachine() {
  this.coffee = 0;
  this.water = 0;
  this.milk = 0;
  this.cups = 0;
}

CoffeeMachine.prototype.status = function () {
  return "coffee: " + this.coffee + "gr, " +
          "milk: " + this.milk + "ml, " +
          "water: " + this.water + "ml, " +
          "cups: " + this.cups;
};

CoffeeMachine.prototype.smallLoad = function () {
  this.coffee += 100;
  this.water += 300;
  this.milk += 200;
  this.cups += 10;
};

CoffeeMachine.prototype.htmlStatus = function () {
  // MAKE A PRETTY HTML OUTPUT HERE!!!!!
  return this.status();
};

var machine = new CoffeeMachine();

console.log("machine:", machine.status());



