## Tests:
Describe: Pizza()

<!-- test 1 -->
Test: "it should return a Pizza object with two properties for topping and size."

Code: 
const myPizza = new Pizza ('veggies', 'large');

Expected Output: Pizza { toppings: 'veggies', size: 'large' }

<!-- test 2 -->
Test: "it should return a Pizza object with two values for the property topping and a single value for the property size."

Code: 
const myPizza = new Pizza(['veggies','cheese'], 'large');

Expected Output: myPizza { toppings:['veggies', 'cheese'], size: 'large' }

<!-- test 3 -->
Test: "it should return a Pizza object with three properties for topping, size, and price."

Code: 
const myPizza = new Pizza(['veggies','cheese'], size: 'large', 4.99);

Expected Output: myPizza { toppings:['veggies', 'cheese'], size: 'large', price: 4.99 }

<!-- test 4 -->
Test: "It should return the cost of adding cheese to the pizza" 

Code:
const myPizza = new Pizza ('cheese');

Expected Output: price: 1

<!-- test 5 -->
Test: "It should return the cost of a small pizza"

Code:
const myPizza = new Pizza('cheese', 'small');

Expected Output: price: 10