//business logic
function Pizza(toppings, size, price) {
  this.toppings = toppings;
  this.size = size;
  this.price = price;
}

let myPizza = new Pizza(["veggies","cheese"], "large", 4.99);
