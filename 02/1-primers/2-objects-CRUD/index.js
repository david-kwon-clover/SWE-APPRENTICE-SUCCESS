/*
https://www.schoolsobservatory.org/discover/quick/planet_age
=============================================================
||                  || Venus || Earth  || Mars  ||
||------------------||-------||--------||-------||
||   Radius         || 6052  || 6378    || 3397 ||
||   yearLength     || 225   || 365.25  || 687  ||
||   surfaceGravity || 0.91  || 1       || 0.38 ||
||   moons          || 0     || 1       || 2    ||
*/

// 1. CREATE: Using the above chart, create an object for each planet with the provided properties and their values.

let venus = {
  radius: 6052,
  yearLength: 225,
  surfaceGravity: 0.91,
  moons: 0,
  getYearLength() {
    return `${this.yearLength} (Earth Days)`
  }
};

let earth = {
  radius: 6378,
  yearLength: 365.25,
  surfaceGravity: 1,
  moons: 1,
  getYearLength() {
    return `${this.yearLength} (Earth Days)`
  }
};

let mars = {
  radius: 3397,
  yearLength: 687,
  surfaceGravity: 0.38,
  moons: 2,
  getYearLength() {
    return `${this.yearLength} (Earth Days)`
  }
};

// 2. READ: In our last task, we created an object for each of the above planets and assigned properties to them. Add a method to each object from question 1 called getYearLength. This method should return yearLength value with the string " (Earth Days)" after it.
/*
Examples:
venus.yearLength => 225
eg mercury.getYearLength() => 255 (Earth Days)
*/

// Use the following object for questions 3 to 6
let favBooks = {
  Bruno: "Lord of the Rings",
  Simon: "1984",
  Samantha: "The Alchemist",
  Steven: "The Little Prince",
  Eliza: "The Catcher in the Rye",
  Melanie: "Beloved",
};

// 3. READ: Store Simon's favorite book in the variable in the variable simonFav using dot or bracket notation.

let simonFav = favBooks.Simon;

// 4. UPDATE: Bruno has just read the Hobbit and likes it more. Change Bruno's favorite book to be the Hobbit using dot or bracket notation. Save the value in the variable brunoFav

favBooks["Bruno"] = "The Hobbit";
let brunoFav = favBooks.Bruno;


// 5. UPDATE: Your friend Brittney wants to be on the list. Her favorite book is The Bluest Eye. Add her to the favBooks object with the key of Brittney.
favBooks["Brittney"] = "The Bluest Eye";

// 6. Steven doesn't want to be included anymore in this favBooks object. Delete the value.
delete favBooks.Steven; 

/*
7. Create an object with the name rocket with the following:
  Properties:
    fuel: 200
    fuelCostToA: 20
    fuelCostToB: 30
    fuelCostToC: 35
  Methods:    all three methods are similar. It checks whether the rocket has enough fuel to travel round trip.
              If it does, it will subtract this amount from the fuel and return true
              If it does not, it will do nothing but return false.
    flyToA()
    flyToB()
    flyToC()
*/

const rocket = {
  fuel: 200,
  fuelCostToA: 20,
  fuelCostToB: 30,
  fuelCostToC: 35,
  flyToA() {
    if(this.fuel >= this.fuelCostToA) {
      this.fuel -= (this.fuelCostToA * 2);
      return true;
    } else {
      return false;
    }
  },
  flyToB() {
    if(this.fuel >= this.fuelCostToB) {
      this.fuel -= (this.fuelCostToB * 2);
      return true;
    } else {
      return false;
    }
  },
  flyToC() {
    if(this.fuel >= this.fuelCostToC) {
      this.fuel -= (this.fuelCostToC * 2);
      return true;
    } else {
      return false;
    }
  }
};

// 8. Create an object called cargo. This object has three properties: ship1, ship2 and ship3 with values of 30, 20 and 10 respectively. Each ship is meant to carry EQUAL weights. Create a method called shareTheLoad. This method will return a new object {ship1, ship2, ship3} with values representing how much weight they are under or over to balance the three ships.

const cargo = {
  ship1: 30,
  ship2: 20,
  ship3: 10,
  shareTheLoad() {
    const balancedWeight = (this.ship1 + this.ship2 + this.ship3) / 3;
    return {
      ship1: balancedWeight - this.ship1,
      ship2: balancedWeight - this.ship2,
      ship3: balancedWeight - this.ship3
    }
  }
};

// DO NOT EDIT BELOW THIS LINE
export { earth, venus, mars, favBooks, simonFav, brunoFav, cargo, rocket };
