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

// Commit: Override accelerate method in EV class to adjust speed and charge
accelerate() {
    this.speed += 20;
    this.charge--;
    console.log('${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%');
}

// Commit: Test EV class methods with different variables
const tesla = new EV('Tesla', 120, 23);

tesla.accelerate(); // Tesla going at 140 km/h, with a charge of 22%
tesla.brake();      // Tesla going at 135 km/h
tesla.chargeBattery(50);
console.log(tesla); // Output: EV { make: 'Tesla', speed: 135, charge: 50 }

tesla.accelerate(); // Tesla going at 155 km/h, with a charge of 49%
