/* eslint-disable no-undef */
/* eslint-disable constructor-super */
/* eslint-disable no-redeclare */
/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */

// import { Car } from "./models/car.js";

// console.log("Hello world!!!");

// const carId = 100;

// carId = 5;

// console.log(carId);
// var carId = 100;
// let carId = 100;

// if (true) {
//   let carId = 100;
// }

// console.log(carId);

// function sendCars(day, ...allCarIds) {
// function sendCars(...allCarIds) {
// function sendCars(day, ...allCarIds) {
//   allCarIds.forEach((id) => console.log(id));
// }

// sendCars("Monday", 100, 200, 555);
// 100	200	555

// let carIds = [100, 200, 300];
// let [car1, car2] = carIds;

// console.log(car1, car2);

// let carIds = [100, 200, 300];
// let [car1, car2, ...theRest] = carIds;

// console.log(car1, car2, theRest);

// let carIds = [100, 200, 300];
// let car1, car2, theRest;
// [car1, car2, ...theRest] = carIds;
// [, car2, ...theRest] = carIds;

// console.log(car1, car2, theRest);

// let car = { id: 5000, style: "convertible" };
// let { id, style } = car;
// let id, style;
// { id, style } = car;
// ({ id, style } = car);

// console.log(id, style);
// 5000 convertible

// function startCars(car1, car2, car3) {
//   console.log(car1, car2, car3);
// }

// let carIds = [100, 300, 500];
// startCars(...carIds);
// 100	300	500

// function startCars(car1, car2, car3, ...rest) {
//   console.log(rest);
// }

// let carIds = [1, 2, 3, 4, 5, 6];
// startCars(...carIds);

// console.log(typeof Number.parseInt("55"));
// console.log(Number.parseInt("55ABC"));
// console.log(Number.parseFloat("55.88ABC"));
// console.log(Number.parseFloat("ABC55.88ABC"));

// for (let i = 0; i < 5; i++) {
//   console.log(i);
//   if (i === 3) {
// break;
//     continue;
//   }
// }

// console.log(1 == 1);
// console.log(1 == true);
// console.log(1 === true);

// let id = 123;
// console.log(id === "123");
// console.log(id == "123");
// console.log(id != "123");
// console.log(id !== "123");

// let year = 1967;
// console.log(++year);
// console.log(year++);
// console.log(year);

// let year = "1967";
// console.log(typeof year);
// console.log(typeof +year);

// let year = "-1967";
// console.log(typeof +year);
// console.log(year);
// console.log(-year);

// if (5 === 5 && 6 === 7) {
// if (5 === 5 && 6 === 6) {
// if (5 === 5 || 6 === 6) {
// if (5 === 3 || 6 === 3) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// let userSettings = null;
// let userSettings = { name: "Joe" };
// let defaultSettings = { name: "Default" };

// console.log(userSettings || defaultSettings);
// console.log(userSettings && defaultSettings);

// console.log(!true);

// let car = null;
// console.log(!car);

// if (!car) {
//   car = {};
// }

// let s1 = "Zoo";
// let s2 = "alphabet";

// if (s1 < s2) {
// if (s1.toUpperCase < s2.toUpperCase) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// console.log(5 > 4 ? "yes" : "no");
// console.log(5 > 44 ? "yes" : "no");

// let year = 1964;
// year += 10;
// year -= 10;
// year >>= 1;
// year <<= 1;
// console.log(year);

// function startCar(carId) {
//   let message = "Starting...";
// }
// startCar(123);
// console.log(message); // undefined

// function startCar(carId) {
//   let message = "Starting...";
//   let startFn = function turnKey() {
//     console.log(message); // 'Starting...'
//   };
//   startFn();
// }
// startCar(123);

// function startCar(carId) {
//   let message = "Starting...";
//   let startFn = function turnKey() {
//     let message = "Override";
//   };
//   startFn();
//   console.log(message); // 'Starting...'
// }
// startCar(123);

// if (5 === 5) {
// let message = "Equal";
//   var message = "Equal";
// }
// console.log(message); // Error

// let message = "Outside";
// if (5 === 5) {
//   let message = "Equal";
//   console.log(message);
// }
// console.log(message); // Outside

// var message = "Outside";
// if (5 === 5) {
//   var message = "Equal";
//   console.log(message);
// }
// console.log(message); // Outside

// (function () {
//   console.log("in function");
// })();

// let app = (function () {
//   let carId = 123;
//   console.log("in function");
//   return {};
// })();

// console.log(app);

// let app = (function () {
//   let carId = 123;
//   let getId = function () {
//     return carId;
//   };
//   return {
//     getId: getId,
//   };
// })();
// console.log(app.getId());

// let o = {
//   carId: 123,
//   getId: function () {
//     console.log(this);
//     return this.carId;
//   },
// };
// console.log(o.getId());

// let o = {
//   carId: 123,
//   getId: function (prefix) {
//     return prefix + this.carId;
//   },
// };

// let newCar = { carId: 456 };

// console.log(o.getId.apply(newCar, ["ID: "]));
// ID: 456

// let o = {
//   carId: 123,
//   getId: function () {
//     return this.carId;
//   },
// };

// let newCar = { carId: 456 };
// let newFn = o.getId.bind(newCar);
// console.log(newFn()); // 456

// let getId = (prefix, suffix) => {
//   return prefix + 123 + suffix;
// };

// let getId = (prefix, suffix) => prefix + 123 + suffix;

// console.log(getId("ID: ", "!"));

// let getId = () => 123;
// console.log(getId());

// let getId = (_) => 123;
// console.log(getId());

let trackCar = function (carId, city = "NY") {
  // let trackCar = function (city = "NY", carId) {
  console.log(`Tracking ${carId} in ${city}.`);
};

// console.log(trackCar(123));
// Tracking 123 in NY.
// console.log(trackCar(123, "Chicago"));
// Tracking 123 in Chicago.

// function Car() {
//   console.log(this);
// }

// Car();
// let vehicle = new Car();

// function Car(id) {
//   this.carId = id;
//   this.start = function () {
//     console.log("start: " + this.carId);
//     // console.log("start: " + carId);
//   };
// }

// let vehicle = new Car(123);
// vehicle.start(); // start: 123

// let jsonIn = `
// [
// {"carId" : 123},
// {"carId" : 456},
// {"carId" : 789}
// ]
// `;

// let carIds = JSON.parse(jsonIn);
// console.log(carIds);
// console.log(JSON.stringify(carIds));

// let carIds = [
//   { carId: 123, style: "sedan" },
//   { carId: 456, style: "convertible" },
//   { carId: 789, style: "sedan" },
// ];
// carIds.forEach((car) => console.log(car));
// carIds.forEach((car, index) => console.log(car, index));

// let carIds = [
//   { carId: 123, style: "sedan" },
//   { carId: 456, style: "convertible" },
//   { carId: 789, style: "sedan" },
// ];
// let convertibles = carIds.filter((car) => car.style === "convertible");

// console.log(convertibles);

// let carIds = [
//   { carId: 123, style: "sedan" },
//   { carId: 456, style: "convertible" },
//   // { carId: null, style: "convertible" },
//   { carId: 789, style: "sedan" },
// ];
// let result = carIds.every((car) => car.carId > 0);

// console.log(result);

// let car = carIds.find((car) => car.carId > 500);

// console.log(car);

// class Car {}
// let car = new Car();
// console.log(car);

// class Car {
//   constructor(id) {
//     this.id = id;
// cid = id;
//   }
// }

// let car = new Car(123);
// car.id = 456;
// console.log(car.id); // 123

// class Car {
//   constructor(id) {
//     this.id = id;
//   }
//   identify() {
//     return `Car Id: ${this.id}`;
//   }
// }
// let car = new Car(123);
// console.log(car.identify());

// class Car {
//   constructor(id) {
//     this.id = id;
//   }
//   identify(suffix) {
//     return `Car Id: ${this.id} ${suffix}`;
//   }
// }
// let car = new Car(123);
// console.log(car.identify("!!!"));

// class Vehicle {
//   constructor() {
//     this.type = "car";
//   }
//   start() {
//     return `Starting: ${this.type}`;
//   }
// }
// class Car extends Vehicle {
// constructor() {
//   super();
// }

//   start() {
//     return "in Car start " + super.start();
//   }
// }
// let car = new Car();
// console.log(car.type);
// console.log(car.start());

// class Car {
//   constructor(id) {
//     this.id = id;
//   }
// }
// let car = new Car(123);
// console.log(car.id);

// let year = 1956;
// console.log(window.year);
// console.log(year);

// console.log(window.innerWidth);
// console.log(innerWidth);

// let intervalId = setInterval(function () {
//   console.log("1 second passed");
// }, 1000);

// if need to cancel . . .
// clearInterval(intervalId);

// console.log(location.href);
// console.log(document.location.href);

// let el = document.getElementById("first");
// console.log(el);

// let els = document.getElementsByClassName("p1");
// console.log(els);
// console.log(els[0]);
// console.log(els[1]);

// let elss = document.getElementsByTagName("p");
// console.log(elss);

// let element = document.getElementById("first");
// element.textContent = "New Content...";

// element.setAttribute("foo", "fooValue");
// console.log(element);

// element.classList.add("p2");

// element.style.color = "blue";
// console.log(element);

// let car = newCar;

// console.log("continuing...");

// try {
//   let car = newCar;
// } catch (error) {
//   console.log("error: ", error);
// }
// console.log("continuing...");

// try {
//   // let car = newCar;
//   let car = null;
// } catch (error) {
//   console.log("error: ", error);
// } finally {
//   console.log("this always executes");
// }

// try {
//   // code here...
//   throw new Error("my custom error");
// } catch (error) {
//   console.log("error: ", error);
// } finally {
//   console.log("this always executes");
// }

// let promise = new Promise(function (resolve, reject) {
//   setTimeout(resolve, 100, "someValue");
// });
// let promise = new Promise(function (resolve, reject) {
//   setTimeout(reject, 100, "someValue");
// });
// console.log(promise);

// let promise = new Promise(function (resolve, reject) {
// setTimeout(resolve, 100, "someValue");
//   setTimeout(reject, 100, "someValue");
// });
// promise.then(
//   (value) => console.log("fulfilled: " + value),
//   (error) => console.log("rejected: " + error)
// );

// let xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//   if (this.readyState == 4 && this.status == 200) {
//     console.log(this.responseText);
//   }
// };
// xhttp.open("GET", "http://61c8831dadee460017260d25.mockapi.io/users", true);
// xhttp.send();

// import $ from "jquery";

// let promise = $.get("http://61c8831dadee460017260d25.mockapi.io/users");
// promise.then(
//   (data) => console.log("success: ", data),
//   (error) => console.log("error: ", error)
// );

// import $ from "jquery";
// let user = {
//   name: "Mark Zamoyta",
//   avatar: "mark.jpg",
// };
// let promise = $.post("http://61c8831dadee460017260d25.mockapi.io/users", user);
// promise.then(
//   (data) => console.log("data: ", data),
//   (error) => console.log("error: ", error)
// );

// let form = document.getElementById("user-form");

// form.addEventListener("submit", (event) => {
//   // prevent the browser from submitting the form
//   // event.preventDefault();
// });

// let form = document.getElementById("user-form");

// form.addEventListener("submit", (event) => {
//   let user = form.elements["user"];
//   let avatarFile = form.elements["avatar-file"];

//   console.log(user.value, avatarFile.value);
//   event.preventDefault();
// });

// let form = document.getElementById("user-form");

// form.addEventListener("submit", (event) => {
//   let user = form.elements["user"];
//   let userError = document.getElementById("user-error");

//   if (user.value.length < 4) {
//     userError.textContent = "Invalid entry";
//     userError.style.color = "red";
//     user.style.borderColor = "red";
//     user.focus();

//     event.preventDefault();
//   }
// });

// import $ from "jquery";

// let form = document.getElementById("user-form");

// form.addEventListener("submit", (event) => {
//   console.log("Submit pressed");
//   let user = form.elements["user"];
//   let avatarFile = form.elements["avatar-file"];

//   let posting = {
//     user: user.value,
//     avatarFile: avatarFile.value,
//   };

//   let promise = $.post(
//     "http://61c8831dadee460017260d25.mockapi.io/users",
//     posting
//   );
//   promise.then(
//     (data) => console.log("Success: ", data),
//     (error) => console.log("error: ", error)
//   );
//   event.preventDefault();
// });

console.log("Hello World!");
// window.foo = "secret code";

// let inputString = "console.log('Hello!');";
// let inputString = "alert('Hello!');";
// eval(inputString);
