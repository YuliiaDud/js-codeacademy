function add(num1, num2) {
  return num1 + num2;
}
// Function declarations are used to create named functions
// Inputs to functions are known as parameters when a function is declared or defined.

// Defining the function
function sum(num1, num2) {
  return num1 + num2;
}
 
// Calling the function, Arguments are values passed into a function when it is called.
sum(2, 4); // 6

// A common mistake is to forget the return keyword, in which case the function will return undefined by default.


const dog = function() {
  return 'Woof!';
}
// Function expressions create functions inside an expression instead of as a function declaration.

// Anonymous Functions

// Named function
function rocketToMars() {
  return 'BOOM!';
}
 
// Anonymous function
const rocketToMars = function() {
  return 'BOOM!';
}


// Arrow Functions (ES6)

// Arrow function with no arguments 
const printHello = () => { 
  console.log('hello'); 
}; 
printHello(); // Prints: hello

// Arrow functions with a single argument 
const checkWeight = weight => { 
  console.log(`Baggage weight : ${weight} kilograms.`); 
}; 
checkWeight(25); // Prints: Baggage weight : 25 kilograms.
 
// Arrow function with two arguments 
const sum = (firstParam, secondParam) => { 
  return firstParam + secondParam; 
}; 
console.log(sum(2,5)); // Prints: 7 



// SCOPE 

// Function scope (only visible within the function)

function myFunction() {
  
  var pizzaName = "Volvo";
  // Code here can use pizzaName
  
}
 
// Code here can't use pizzaName


//Block Scoped Variables

const isLoggedIn = true;
 
if (isLoggedIn == true) {
  const statusMessage = 'User is logged in.';
}
 
console.log(statusMessage); // Uncaught ReferenceError: statusMessage is not defined

// const and let are block scoped variables, meaning they are only accessible in their block

// Note: It is best practice to keep global variables to a minimum.

let plusFive = (number) => {
  return number + 5;  
};
// f is assigned the value of plusFive
let f = plusFive;
 
plusFive(3); // 8
// Since f has a function value, it can be invoked. 
f(9); // 14
 

//Hoisting
function printHello (firstName) {
 alert ( "Добрый день, " + firstName + "!");
}

printHello('Julia'); //СНАЧАЛА РАБОТАЕТ ЭТА СТРОКА - ВОЗВРАЩАЕТ НА САМУ ФУНКЦИЮ. Можно поменять местами, всё равно будет работать

//Higher-Order Functions - is a function that accepts functions as parameters and/or returns a function
// A callback function is a function that is passed into another function as an argument

const isEven = (n) => {
  return n % 2 == 0;
}
 
let printMsg = (evenFunc, num) => {
  const isNumEven = evenFunc(num);
  console.log(`The number ${num} is an even number: ${isNumEven}.`)
}
 
// Pass in isEven as the callback function
printMsg(isEven, 4); 
// Prints: The number 4 is an even number: True.

// Factory Functions -to create many instances of an object quickly

function robotFactory (model,mobile) {
    return {
        model: model,
        mobile: mobile,
        beep() {
            console.log('Beep Boop')
        }
    }
}

const tinCan = robotFactory('P-500', true)

const monsterFactory = (name, age, energySource, catchPhrase) => {
  return { 
    name: name,
    age: age,
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    }
  }
};
const ghost = monsterFactory('Ghost', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!

// Destructuring technique, called property value shorthand

const monsterFactory = (name, age) => {
    return {
        name,
        age
    }
};

let vampire = {
    name: 'Dracula',
    residence: 'Transylvania'
}

const residence = vampire.residence;
console.log(residence);
// or
const { residence } = vampire;
console.log(residence);










