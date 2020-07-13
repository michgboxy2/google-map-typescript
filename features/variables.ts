//Type annotation is declaration of an element value type

let apples: number = 5;

let speed: string = "fast";

let hasName: boolean = true;

let nothingMuch: null = null;

//built in objects
let now: Date = new Date();

//Array
let colors: string[] = ["red", "green", "blue"];
let myNumnbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

//classes

class Car {}

let car: Car = new Car();

//Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//Reasons to use the type annotation and not typescript inference
//1) When you write a function that returns a type any
////function that returns any type
const json = '{"x": 10, "y": 20}';
const coodinates: { x: number; y: number } = JSON.parse(json);
console.log(coodinates);

//2) when we declare a variable on one line and initialize it later
let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  foundWord = true;
}

//3) Variables whose type cannot be inferred correctly
let numbers = [-10, -1, 12];

let numbersAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numbersAboveZero = numbersAboveZero[i];
  }
}
