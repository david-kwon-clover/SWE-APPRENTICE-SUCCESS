// 1. You have been provided with an object of students and their ages. Create a function called getStudents that accepts an object and returns only the student names (the key values in the object) as an array.
/*
Example:
const students = {
    "Mariama": 19,
    "Lasana": 18,
    "Wilmer": 22,
    "Fatima": 21,
}
getStudents(students); => ["Marima", "Lasana", "Wilmer", "Fatima"]
*/
const students = {
  Mariama: 19,
  Lasana: 18,
  Wilmer: 22,
  Fatima: 21,
};
function getStudents(students) {
  return Object.keys(students);
}

// 2. You have been provided an object, cart, that contains all the objects you have bought in the store. Create a function called getTotal that accepts the cart object and returns the total cost of all the items in your cart.
let cart = {
  Chips: 1.99,
  Candy: 0.99,
  Soda: 1.49,
  Beer: 7.99,
  Cigarettes: 7.98,
  EnergyDrink: 2.99,
  IceCream: 2.99,
  LotteryTicket: 3.0,
  Newspaper: 5.0,
  Sandwich: 6.5,
};

function getTotal(cart) {
  const costs = Object.values(cart);
  return costs.reduce((sum, cost) => {
    sum += cost;
    return sum;
  }, 0)
}

// 3. Create an object called employee with the following:

/*
    properties
        weeklyHours - [7,6,7,7] => Each element represents a single shift's length 
    methods
        getTotalHours() - this will return the total number of hours from the weeklyHours array.
        addShift(shiftLength)   - this should add the incoming argument to the weeklyHours array and return "Shift added."
                                - before the number is added, it should make sure that in doing this, the employee won't exceed 5 shifts or 40 hours.
                                  If this happens, do not add the number, and return "Shift limit reached"  
*/

let employee = {
  weeklyHours: [7, 6, 7, 7],
  getTotalHours() {
    return this.weeklyHours.reduce((totalHours, shiftHours) => {
      totalHours += shiftHours;
      return totalHours;
    }, 0)
  },
  addShift(shiftLength) {
    const potentialHours = this.getTotalHours() + shiftLength;
    const shiftCount = this.weeklyHours.length + 1;
    
    if(potentialHours <= 40 && shiftCount <= 5) {
      this.weeklyHours.push(shiftLength);
      return "Shift added"
    } else {
      return "Shift limit reached";
    }
  }
};

// 4. A an array of objects called people has been imported below
import people from "./seed.js";
// Use this data set to answer the following questions.

// a. Update the empty peopleNames array with the all the names stored in people.
let peopleNames = [];
peopleNames = people.map((person) => {
  return person.name;
})

// b. Determine the average age of all the people. Store the answer in the variable averageAge. Round to the nearest whole number
let averageAge;
const totalAge = people.reduce((ageSum, person) => {
  ageSum += person.age;
  return ageSum;
}, 0)
averageAge = Math.round(totalAge / people.length);

// c. What percentage of people have black hair. Store in the variable blackHairPercent and round to the nearest whole number.
let blackHairPercent;
const blackHairTotal = people.reduce((blackHairCount, person) => {
  if(person.hairColor === "black") {
    blackHairCount++;
  }
  return blackHairCount;
}, 0)
blackHairPercent = Math.round((blackHairTotal / people.length) * 100);

// d. Every people in the people array have a country. Create a function called countryList that accepts the people array and returns an object of the total count by country.
/*
Example:
findFavorite(people) => returns

{
    "Game of Thrones": 10,
    "Stranger Things": 4,
    ...
}
*/
function countryList(people) {
  return people.reduce((countryCount, person) => {
    if(!countryCount[person.country]) {
      countryCount[person.country] = 1;
    } else {
      countryCount[person.country] += 1;
    }
    return countryCount;
  }, {})
}

// e. Create a function findFavorite that accepts the people object and returns and object with the number of times each favorite show appears in the people array.
/*
Example:
findFavorite(people) => returns

{
    "Game of Thrones": 10,
    "Stranger Things": 4,
    ...
}
*/

function findFavorite(people) {
  return people.reduce((favoriteShowsCount, person) => {
    for(let i = 0; i < person.favoriteShows.length; i++) {
      if(!favoriteShowsCount[person.favoriteShows[i]]) {
        favoriteShowsCount[person.favoriteShows[i]] = 1;
      } else {
        favoriteShowsCount[person.favoriteShows[i]]++;
      }
    }
    return favoriteShowsCount;
  }, {})
}


export {
  getStudents,
  getTotal,
  employee,
  averageAge,
  blackHairPercent,
  countryList,
  findFavorite,
  people,
};
