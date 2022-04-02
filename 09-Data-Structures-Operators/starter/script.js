'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received ${this.starterMenu[starterIndex]}, ${this.mainMenu[mainIndex]}. Will be delivered to ${address}, at ${time}.`
    );
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

restaurant.orderDelivery({
  time: '22',
  address: 'Street',
  mainIndex: 2,
  starterIndex: 2,
});

let arr = [2, 3, 4];
const a = [0];
const b = [1];
const c = [2];

let [x, y, z] = arr;
console.log(x, y, z);
console.log(arr); // not modifying array

let [first, , second] = restaurant.categories; // skipping variables which are not needed
console.log(first, second);

[first, second] = [second, first]; // switching variables the easiest

// Receiving two variables from one function call, 2 new variables
const [starter, mainCourse] = restaurant.order(1, 1);
console.log(starter, mainCourse);

// destructuring in nested arrays
const nested = [2, 3, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// default values
const [one = 1, two = 1, three = 1] = [1, 2];
console.log(one, two, three);

// destructuring objects
const { name, openingHours, categories } = restaurant; // creating 3 new variables
console.log(name, openingHours, categories);

// destructuring objects and renaming them with new objects
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// setting default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables
let aa = 111;
let bb = 999;
const obj = { aa: 23, bb: 7, cc: 14 };
({ aa, bb } = obj);
console.log(aa, bb);

// nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
