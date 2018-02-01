// Assignment: Ninja Class
// Create a new class called Ninja with the following attributes:
//
// name
// health
// speed (private)
// strength (private)
// Speed and strength should be 3 by default. Health should be 100 by default.
//
// The Ninja class should have the following methods:
//
// sayName() - This should log that Ninja's name to the console.
// showStats() - This should show the Ninja's Strength and Speed, as well as their health.
// drinkSake() - This should add +10 Health to the Ninja

function NinjaClassI(name){
  const speed = 3;
  const strength = 3;
  this.health = 100;
  this.name = name;

  this.sayName = function() {
    console.log("My ninja name is: "+this.name);
  }

  this.showStats = function () {
    console.log("Name: "+this.name+", Health: "+this.health+", Speed: "+speed+", strength: "+strength);

  }

  this.drinkSake = function(){
    console.log(this.health+=10);
    this.showStats();
  }
}

const ninja1 = new NinjaClassI("Carlos");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
