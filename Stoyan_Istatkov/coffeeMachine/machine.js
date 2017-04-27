
 /* Created by STEVIS on 4/25/2017. */
 
"use strict";


function  CoffeeMachine () {
    this.coffee = 0;
    this.water = 0;
    this.milk = 0;
    this.cups = 0;
}
     var machine = new CoffeeMachine();

CoffeeMachine.prototype.status = function () {
    return "coffee: " + this.coffee + " gr. " + "<br>"
        + "milk: " + this.milk + " ml." + "<br>"
        + "water: " + this.water + " ml." + "<br>"
        + "cups: " + this.cups ;

};
CoffeeMachine.prototype.smallLoad = function() {

    this.coffee += 100;
    this.water += 300;
    this.milk += 200;
    this.cups += 10;
};

CoffeeMachine.prototype.mediumLoad = function() {

    this.coffee += 500;
    this.water += 1000;
    this.milk += 300;
    this.cups += 30;
};

CoffeeMachine.prototype.bigLoad = function() {

    this.coffee += 1000;
    this.water += 2000;
    this.milk += 600;
    this.cups += 60;
};

CoffeeMachine.prototype.htmlStatus = function () {
    // MAKE A PRETTY HTML OUTPUT HERE!!!!!

    document.getElementById("statusContainer").style.backgroundColor = "#FCF8E3";
    document.getElementById("statusContainer").style.fontSize = "20px";
    document.getElementById("statusContainer").style.color = "#8A6D3B";
    return this.status();
};

var RECIPES = {

    coffee : {coffee:20, water:60, cups:1 },

    coffeeMilk : {coffee:20, water:50, milk:20, cups:1 },

    cappuccino : {coffee:20, water:30, milk:40, cups:1 },

    latte : {coffee:20,water:30, milk:60, cups:1 },

    americano : {coffee:20, water:130, cups:1 },

    doubleCoffee :{coffee:35, water:80, cups:1 }

};
console.log(RECIPES.coffee);

CoffeeMachine.prototype.order = function (drink) {

    return "serves one " + drink;
};
machine.order("cappuccino");



