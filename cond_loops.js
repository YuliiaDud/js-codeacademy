true || false;        // true
10 > 5 || 10 > 20;    // true
false || false;       // false
10 > 100 || 10 > 20;  // false

true && true;      // true
1 > 2 && 2 > 1;    // false
true && false;     // false
4 === 4 && 3 > 1;  // true

1 === 1 //strict equal TRUE
1 !== 1 //strict not equal FALSE

// Falsy values:  false, 0, empty strings, null undefined, NaN.

// NOT operator ! can be used to do one of the following: 1) Invert a Boolean value.2) Invert the truthiness of non-Boolean values.
let lateToWork = true;
let oppositeValue = !lateToWork;
 
console.log(oppositeValue); 
// Prints: false

// Ternary Operator
let price = 10.5;
let day = "Monday";
 
day === "Monday" ? price -= 1.5 : price += 1.5; // If the condition evaluates to truthy, the first expression is executed, otherwise, the second expression is executed.

// IF statement, ELSE IF statement, ELSE statement

const size = 10;
 
if (size > 100) {
  console.log('Big');
} else if (size > 20) {
  console.log('Medium');
} else if (size > 4) {
  console.log('Small');
} else {
  console.log('Tiny');
}
// Print: Small

// SWITCH

const food = 'salad';
 
switch (food) {
  case 'oyster':
    console.log('The taste of the sea 🦪');
    break;
  case 'pizza':
    console.log('A delicious pie 🍕');
    break;
  default:
    console.log('Enjoy your meal');
}
 
// Prints: Enjoy your meal

//LOOPS

// While Loop - undetermined number of times

let i = 0;
 
while (i < 5) {        
  console.log(i);
  i++;
}

// A do...while statement creates a loop that executes a block of code once
x = 0
i = 0
 
do {
  x = x + i;
  console.log(x)
  i++;
} while (i < 5);
 
// Prints: 0 1 3 6 10

//For Loop - is ideal when we know how many times the loop should run.


for (let i = 0; i < 4; i += 1) {
  console.log(i);
};
 
// Output: 0, 1, 2, 3

//Looping Through Arrays

for (let i = 0; i < array.length; i++){
  console.log(array[i]);
}
 
// Output: Every item in the array

const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];
for (let i = 0; i < animals.length; i++){
    console.log(animals[i]);
}

// Nested for loop is a loop inside another loop

let myFollowers = ['Mark', 'Ray', 'Kate', 'Joana'];
let yourFollowers = ['Andrew', 'Ray', 'Kate', 'Alice'];
let mutualFollowers = [];

for (let i = 0; i < myFollowers.length; i++){
    for (let j = 0; j < yourFollowers.length; i++){
        if (myFollowers[i] === yourFollowers[j]) {
            mutualFollowers.push(yourFollowers[j]);
        }
    }
}

console.log(mutualFollowers);

// BREAK WORD 

for (let i = 0; i < 99; i += 1) {
  if (i > 5) {
     break;
  }
  console.log(i)
}

for (let index = 0; index < myFollowers.length; index++) {
    console.log([i]);
    if (myFollowers[i] === 'Kate') {
        break;
    }
}

// Looping Through Objects with for...in

let spaceship = {
    crew: {
        captain: {
            name: 'Lily',
            degree: 'Computer Engineering'
        },
        medic: {
            name: 'Clementine',
            degree: 'Physics'
        },
        'Chief Officer': {
            name: 'Dan',
            degree: 'Aerospace Engineering'
        },
        translator: {
            name: 'Shauna',
            degree: 'Conservation Science'
        }
    },
    facilities: {
        engine: "",
        turbines: 8
    }
}

for (let crewMember in spaceship.crew) {
    console.log(crewMember + ":" + spaceship.crew[crewMember].name)
}

for (let crewMember in spaceship.crew) {
    console.log(spaceship.crew[crewMember].name + ":" + spaceship.crew[crewMember].degree)
}