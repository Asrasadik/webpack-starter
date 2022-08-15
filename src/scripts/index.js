/*import '../styles/index.scss';

console.log('webpack starterkit');*/

/*1. console.log(carId);
console.log(carId2)

let carId = 46;
//or
var carId2 = 46;

2. if (true) {
  let foo = 9;
  //or
  var foo2 =9;
}
console.log(foo);
console.log(foo2);

3. function sendCars(day, ...allCarIds) {
  console.log(day);
  allCarIds.forEach((id) => console.log(id));
}
sendCars("Monday", 100, 200, 300);*/

let carIds = [1, 2, 5];

let [car1, car2, car3] = carIds;

console.log(car1, car2, car3);

//----------------------------

let cars, remainingIds;
[, ...remainingIds] = carIds;

console.log(cars, remainingIds);

//--------destructuring objects------

let car = { id: 500, style: "convertible" };
let id, style;
({ id, style } = car);
console.log(id, style);

//--------Spread syntax----------------

function spreadCars(car1, car2, car3, ...rest) {
  console.log(car1, car2, car3, rest);
}

let aCars = [20, 30, 50, 1, 2, 3, 4, 5];
spreadCars(...aCars);

let carCodes = "abc";
spreadCars(...carCodes);
