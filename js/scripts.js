//business logic
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.price = 0;
}

const myPizza = new Pizza("cheese");

//pizza price method
Pizza.prototype.pizzaPrice = function() {
if (this.topping === "cheese"){
}
return this.price = 1;
}