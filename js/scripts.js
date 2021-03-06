//business logic
function Pizza(toppingOne, toppingTwo, size) {
  this.toppingOne = toppingOne;
  this.toppingTwo = toppingTwo;
  this.size = size;
  this.price = 0;
}

Pizza.prototype.toppingOnePrice = function () {
  if (this.toppingOne === "Cheese") {
    this.price += 1;
  } else if (this.toppingOne === "Veggies") {
    this.price += 2;
  } else {
    this.price += 3;
  }
};

Pizza.prototype.toppingTwoPrice = function () {
  if (this.toppingTwo === "Cheese") {
    this.price += 2;
  } else if (this.toppingTwo === "Veggies") {
    this.price += 3;
  } else {
    this.price += 4;
  }
};

Pizza.prototype.sizePrice = function () {
  if (this.size === "Small") {
    this.price += 10;
  } else if (this.size === "Medium") {
    this.price += 12;
  } else {
    this.price += 14;
  }
};
//user logic
$(document).ready(function () {
  let pizzaArray = [];

  $("form#pizza").submit(function (event) {
    event.preventDefault();
    let toppingOne = $("#toppingOne").val();
    let toppingTwo = $("#toppingTwo").val();
    let size = $("#size").val();
    let pizza = new Pizza(toppingOne, toppingTwo, size);
    pizza.toppingOnePrice();
    pizza.toppingTwoPrice();
    pizza.sizePrice();
    pizzaArray.push(pizza);
    console.log(pizzaArray);

    $("#checkout").html(
      "🍕🍕🍕 You ordered a " +
        pizza.size +
        " " +
        pizza.toppingOne +
        ", " +
        pizza.toppingTwo +
        " pizza! " +
        " Total: $" +
        pizza.price +
        " 🍕🍕🍕"
    );
    $("#checkout").show();
    $("#reset").show();
    $("#display").show();

    $("#reset").click(function () {
      $("#checkout").toggle().hide();
      $("#reset").toggle().hide();
      $("#display").toggle().hide();
      document.getElementById("pizza").reset();
    });
  });
});
