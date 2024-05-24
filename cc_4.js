//U

// Commit: Created EV class extending Car with additional charge property
class Car {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed;
    }
  
    accelerate() {
      this.speed += 10;
      console.log(`${this.make} going at ${this.speed} km/h`);
    }
  
    brake() {
      this.speed -= 5;
      console.log(`${this.make} going at ${this.speed} km/h`);
    }
  }
  // Commit: additonal charge property 
  class EV extends Car {
    constructor(make, speed, charge) {
      super(make, speed);
      this.charge = charge;
    }
  }
  
// Commit: Implement chargeBattery method in EV class
chargeBattery(chargeTo) {
    this.charge = chargeTo;
}

