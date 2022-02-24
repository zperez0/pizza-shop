## Tests:
Describe: Pizza()

<!-- test 1 -->
Test: "it should return a Pizza object with two properties for topping and size."

Code: const myPizza = new Pizza ('veggies', 'large');

Expected Output: Pizza { toppings: 'veggies', size: 'large' }

<!-- test 2 -->
Test: "it should return two values for the property topping and a single value for the property size."

Code: let myPizza = new Pizza(['veggies','cheese'], "large");

Expected Output: myPizza { toppings:['veggies', 'cheese'], 'large' }