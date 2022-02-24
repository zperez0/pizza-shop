//business logic
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.price = 0;
}

const myPizza = new Pizza("cheese", "large");

//pizza topping price method
Pizza.prototype.toppingPrice = function() {
  if (this.toppings === "Cheese") {
    this.price = 1;
  } else if (this.toppings === "Veggies") {
    this.price = 2;
  } else {
    this.price = 3;
  }
}

//pizza size price method
Pizza.prototype.sizePrice = function() {
  if (this.size === "Small") {
    this.price = 10;
  } else if (this.size === "Medium") {
this.price = 12;
  } else {
this.price = 14;
  }
}