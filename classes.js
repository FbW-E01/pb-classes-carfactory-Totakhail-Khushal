// # Car factory

// Create a constructor function that can be used to create objects.

// The objects your factory creates should all have a "type" propety that always has the value "car".

// The factory should take in three parameters and save them to the created objects:
// - make
// - model
// - year

// Use your function to create 10 different cars.Store all of them inside a "garage" array.

// 1. 
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.type = "car";
}
const car = new Car("Mercedes", "x350", 2020);

console.log(car.make);
console.log(car.model);
console.log(car.year);
console.log(car.type);


console.log(new Car(" Audi", "x5", 2022));
console.log(new Car(" Toyota", "LandCurser", 2022));

console.log([
    (new Car("Audi ", " Silverado", 2022)),
    (new Car("Jaguar", "CTS", 2022)),
    (new Car("BMW ", "  Expedition", 2022)),
    (new Car("Rolls Royce", "Focus", 2022)),
    (new Car("Lamborghini ", "B340", 2022)),
    (new Car("Ferrari", "H980", 2022)),
    (new Car("Aston Martin", "Lan4", 2022)),
    (new Car("Hyundai ", "456C", 2022)),
    (new Car(" Porsche ", "y768", 2022)),
]);



























































// 🤖: Nothing to see down here