## Tests:
Describe: Pizza()

<!-- test 1 -->
Test: "it should return a Pizza object with two properties for topping and size."

Code: 
const myPizza = new Pizza ('Veggies', 'Large');

Expected Output: Pizza { toppings: 'Veggies', size: 'Large' }

<!-- test 2 -->
Test: "it should return a Pizza object with two values for the property topping and a single value for the property size."

Code: 
const myPizza = new Pizza(['Veggies','Cheese'], 'Large');

Expected Output: myPizza { toppings:['Veggies', 'Cheese'], size: 'Large' }

<!-- test 3 -->
Describe: toppingOnePrice()

Test: "it should return a Pizza object with three properties for topping, size, and price."

Code: 
const myPizza = new Pizza(['Veggies','Cheese'], size: 'Large', 4.99);

Expected Output: myPizza { toppings:['Veggies', 'Cheese'], size: 'Large', price: 4.99 }

<!-- test 4 -->
Describe: toppingTwoPrice()

Test: "It should return the cost of adding cheese to a pizza" 

Code:
const myPizza = new Pizza ('Cheese');

Expected Output: price: 1

<!-- test 5 -->
Describe: sizePrice()

Test: "It should return the cost of a small pizza"

Code:
const myPizza = new Pizza('Cheese', 'Small');

Expected Output: price: 10