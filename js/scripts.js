//business logic
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.price = 0;
}

const myPizza = new Pizza("cheese", "small");

//pizza price method
Pizza.prototype.toppingPrice = function() {
  if (this.toppings === "cheese") {
    this.price = 1;
  } else if (this.toppings === "veggie") {
    this.price = 2;
  } else {
    this.price = 3;
  }
}


//pizza size price method
Pizza.prototype.sizePrice = function(){
  if (this.size === "small"){
    this.size = 10;
  }
  return this.size = 10;
}