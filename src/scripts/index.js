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

//-------Type Conversion-----------------
// let num = 5;
// let snum = num.toString();

console.log(Number.parseInt("55A67BC"));
//-----Loops-----------------------------

let i = 0;
for (; i < 12; i++) {
  if (i === 8) {
    break;
  }
}
console.log(i);

for (let j = 0; j < 5; j++) {
  if (j === 3) continue;
  console.log(j);
}

//------------closure--------------
let app = (function () {
  let carId = 123;
  let getID = function getId() {
    return carId;
  };
  return {
    get_ID: getID,
  };
})();
console.log(app.get_ID());
//--------------------------

let fun = function () {
  let msg = "Hello";
  return msg;
};
console.log(fun);

//---------call and apply---------
let obj = {
  carId: 123,
  getId: function (prefix, sufix) {
    return prefix + this.carId + sufix;
  },
};

let newCar = { carId: 456 };
console.log(obj.getId.apply(newCar, ["ID: ", ";"]));
//-----------bind---------------
let obj2 = {
  carId: 123,
  getId: function () {
    return this.carId;
  },
};
let newCar2 = { carId: 456 };
let newFn = obj2.getId.bind(newCar2);
console.log(newFn());

let module = {
  x: 42,
  getX: function (pre) {
    return pre + this.x;
  },
};

let newX = { x: 78 };
let boundGetX = module.getX.bind(newX, "ID:");
console.log(boundGetX()); // console.log(boundGetX("ID:"));
