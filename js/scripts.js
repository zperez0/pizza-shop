//business logic
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.price = 0;
}

const myPizza = new Pizza("cheese", "small");

//pizza price method
Pizza.prototype.pizzaPrice = function() {
if (this.topping === "cheese"){
}
return this.price = 1;
}


//pizza size price method
Pizza.prototype.sizePrice = function(){
  if (this.size === "small"){
  }
  return this.size = 10;
}