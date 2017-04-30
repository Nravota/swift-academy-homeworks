/*global document*/
function CoffeeMachine() {
    this.coffee = 0;
    this.milk = 0;
    this.water = 0;
    this.cups = 0;
}
var machine = new CoffeeMachine();

CoffeeMachine.prototype.smallLoad = function() {
    this.coffee += 100;
    this.milk += 200;
    this.water += 300;
    this.cups += 10;
};
CoffeeMachine.prototype.mediumLoad = function() {
    this.coffee += 500;
    this.milk += 300;
    this.water += 1000;
    this.cups += 30;
};
CoffeeMachine.prototype.bigLoad = function() {
    this.coffee += 1000;
    this.milk += 500;
    this.water += 2000;
    this.cups += 60;
};
CoffeeMachine.prototype.htmlStatus = function() {
    return ("<div class=\"well\">coffee: " + this.coffee + " gr</div>" + "<div class=\"well\">milk: " + this.milk + " ml</div>" + "<div class=\"well\">water: " + this.water + " ml</div>" + "<div class=\"well\">cups: " + this.cups + " pcs</div>");
};
CoffeeMachine.prototype.order = function(beverage) {
    if (RECEPES[beverage] === undefined) {
        throw new Error("<div class=\"well\">Uknown beverage</div>");
    } else if ((this.coffee >= RECEPES[beverage].coffee) && (this.milk >= (RECEPES[beverage].milk || 0)) && (this.water >= RECEPES[beverage].water) && (this.cups >= RECEPES[beverage].cups)) {
        this.coffee -= RECEPES[beverage].coffee;
        this.milk -= RECEPES[beverage].milk || 0;
        this.water -= RECEPES[beverage].water;
        this.cups -= RECEPES[beverage].cups;
        return this;
    } else {
        throw new Error("<div class=\"well\">Not enough components</div>");
    }

};
var RECEPES = {
    coffee: {
        coffee: 20,
        water: 60,
        cups: 1
    },
    coffee_with_milk: {
        coffee: 20,
        water: 50,
        milk: 20,
        cups: 1
    },
    cappuccino: {
        coffee: 20,
        water: 30,
        milk: 40,
        cups: 1
    },
    latte: {
        coffee: 20,
        water: 30,
        milk: 60,
        cups: 1
    },
    americano: {
        coffee: 20,
        water: 130,
        cups: 1
    },
    double: {
        coffee: 35,
        water: 80,
        cups: 1
    }
};

document.getElementById("statusContainer").innerHTML = machine.htmlStatus();
//console.log(recepes.coffee);