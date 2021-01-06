//Data types(primitive)
let string = 'string';
let number = 2; 
let boolean = true;
let a;
console.log(a); // returns underfined
let b = null; //the intentional absence of value
Math.random() // Prints: 0 - 0.9
console.log(Math.floor(5.95)); // Prints: 5
Math.floor(3.99) // 3
Math.ceil(3.14) // 4
Math.round(3.99)// 4
Math.round(3.14) // 3

Math.min(1, 2, 3) // 1
Math.max(1, 2, 3) // 3


Math.round(Math.random() * 1000)

let c = Math.floor(Math.random() * 4);
console.log(c);

// String - объект
// Вхождение внутрь строки - только поиск, чтобы вытащить что-то/поменять изначальное значение --> создавать новую перемнную и присваивать ей значение
string.indexOf()
string.lastIndexOf()

let string  = "gooseberry";
string.indexOf("b") // 5
string.lastIndexOf("b") // 4

// string.replace(old, new)
string.replace ("s", "l") -->"gooleberry"
string.replace (/e/g, "a") --> "goosabarry"
string.slice(1,3) // "oo"
string.slice(3) // "seberry"

string.split(', ') // разобъет стринговое значение на отдельные, возвращаетт массив 
let cities = "Москва, Питер, Киев";
cities.split(', ') // ["Москва", "Питер", "Киев"]

"Киев".toUpperCase() --> КИЕВ
"Киев".toLowerCase() --> киев

string.trim() // очистить от пробелов
let city = '   Kyiv';
city = city.trim();

string.trimLeft()
string.trimRight()


let age = 7;
 
// String concatenation
'Tommy is ' + age + ' years old.';
 
// String interpolation
`Tommy is ${age} years old.`;

//Object - key-value pairs
let car = {
    mark: 'BMW',
    model: 'XS',
    year: 2010,
    getName: function(){
       return this.mark + " " + this.model;
    }
}

console.log (car.getName());

// Accessing Properties
car.mark; //Dot  Notation
car['mark'] // Bracket Notation

car.mark = 'Lexus'; // changes BMW to Lexus 

delete car.mark; // removes the mark property

// Method - when the data stored on an object is a function.
const alienShip = {
    invade() {
        console.log('Hello!We\'ll dominate your planet!' )
    }
}

alienShip.invade(); // prints Hello!We'll dominate your planet!

// Array - type of object 
const myArray = [100, 200, 300];
// Accessing an array element

console.log(myArray[0]); // 100
console.log(myArray[1]); // 200
console.log(myArray[2]); // 300

array.length  // длина массива

const numbers = [1, 2, 3, 4];
numbers.length // 4

array.push('title') // добавить значение в массив в конец
// Adding a single element:
const cart = ['apple', 'orange'];
cart.push('pear'); 
 
// Adding multiple elements:
const numbers = [1, 2];
numbers.push(3, 4, 5);

array.pop()  // удалить значение с конца
const ingredients = ['eggs', 'flour', 'chocolate'];
 
const poppedIngredient = ingredients.pop(); // 'chocolate'
console.log(ingredients); // ['eggs', 'flour']

array.shift() // удалить значение с начала
array.unshift() // добавить значение в массив в конец 
array.sort() // сортировка по строкам 1,10,6
array.join(separator)
array.join(' + ')  // объединение в строку с разделителем
array.reverse() // в обратном порядке
array.slice()
array.slice(0, 5) // элементы массива от 0 до 5(не включая)
let vehicles = ['car', 'bus', 'train', 'plane', 'scooter']
array.indexOf('train') // 2
array.lastIndexOf('bus')// 3

// Проверка на наличие в массиве
if (cities.indexOf('Москва') >=0){}
if (cities.indexOf('Москва') !== -1){}