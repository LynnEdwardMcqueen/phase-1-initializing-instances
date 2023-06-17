// Write your code here

class Breakfast {
    constructor(food, drink) {
        this.food = food;
        this.drink = drink;
    }
}

class Lunch {
    constructor(salad, soup,drink) {
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}

class Dinner {
    #dessert
    constructor(salad, soup, entree, dessert) {
      this.salad = salad;
      this.soup = soup;
      this.#dessert = dessert;
      this.entree = entree;
    }
}

let am = new Breakfast("pancakes", "milk")
let noon = new Lunch("Tossed", "Minnestrone", "Coke")
let evening = new Dinner("Tossed", "Wonton", "Ribeye", "Ice Cream Cake")

console.log(am, noon, evening)

