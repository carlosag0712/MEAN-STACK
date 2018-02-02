class Ninja {
  constructor(name){
      this.name = name;
      this.health = 100;
      this.speed = 3;
      this.strength = 3;
  }

    sayName(){
      console.log("Ninja name: "+this.name);
    }
    showStats(){
      console.log("strength: "+ this.strength);
      console.log("speed: "+ this.speed);
    }
    drinkSake(){
      this.health +=10;
      console.log("Updated healt: "+ this.health);
    }

}

const carlosninja = new Ninja("Carlos");
carlosninja.showStats();
carlosninja.drinkSake();
