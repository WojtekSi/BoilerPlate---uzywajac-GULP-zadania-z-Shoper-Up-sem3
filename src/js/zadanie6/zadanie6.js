class Vehicle {
  constructor(type) {
    this.type = type;
  }

  getType() {
    return this.type;
  }
}

class Car extends Vehicle {
  numberOfWheels = 4;
  constructor(type, name) {
    super(type);
    this.name = name;
  }

  showInfo() {
    console.log(
      `I am ${this.type}, my name is ${this.name} and I have ${this.numberOfWheels} wheels`
    );
  }
}

const car = new Car("Volkswagen", "Passat");
