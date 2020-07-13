class Vehicle {
  constructor(public color: string) {
    // this.color = color;
  }

  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle("orange");

console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log("vroooom!!!!");
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

const car = new Car(4, "red");

///////class types///////
//public -: This method can be called anywhere
//private -: This method can only be called by other methods in this class
//protected -: methods can be called only by methods in this class and other methods in child processes.
