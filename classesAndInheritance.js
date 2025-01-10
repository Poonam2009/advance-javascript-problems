// Vehicle class
class Vehicle {
    constructor(name, wheel) {
        this.name = name;
        this.wheel = wheel
    }

    getDescription() {
        return(`${this.name} has ${this.wheel} wheels`)
    }
}

class Car extends Vehicle {
    constructor(name, wheel, doors){
        super(name, wheel);
        this.doors = doors;
    }

    getDescription() {
        return `${super.getDescription()} and ${this.doors} doors`;
      }
}
class Bike extends Vehicle {
    constructor(name, wheel, type){
        super(name, wheel);
        this.type = type;
    }
    getDescription() {
        return `${super.getDescription()} and is a ${this.type} type`;
      }
}

const myCar = new Car("My Car", 4, 4);
console.log(myCar.getDescription()); // My Car has 4 wheels
console.log(myCar.doors); // 4

const myBike = new Bike("My Bike", 2, "offroad");
console.log(myBike.getDescription()); // My Bike has 2 wheels
console.log(myBike.type); // offroad