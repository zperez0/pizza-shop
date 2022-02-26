# _Pizza Shop_

#### By _**Z Perez**_

#### _A simple web application created to let users build their own pizza and return a calculated cost._

## Links

_https://zperez0.github.io/pizza-shop/_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _jQuery_

## Description

_This web application is designed to allow users to build their own pizzas by choosing up to two toppings and sizes. The total cost is calculated based on a choice of desired toppings and size. This project was created in order to demonstrate my knowledge and understanding of object-oriented programming._

## Setup/Installation Requirements

* _Open [GitHub](https://github.com/)_
* _Copy repository url_
* _Clone this repository to your desktop_
* _Open pizza-shop/index.html_
* _Drag and drop into browser_


## Tests:
Describe: Pizza()


Test: "it should return a Pizza object with two properties for topping and size."

Code: 
const myPizza = new Pizza ('Veggies', 'Large');

Expected Output: Pizza { toppings: 'Veggies', size: 'Large' }


Test: "it should return a Pizza object with two values for the property topping and a single value for the property size."

Code: 
const myPizza = new Pizza(['Veggies','Cheese'], 'Large');

Expected Output: myPizza { toppings:['Veggies', 'Cheese'], size: 'Large' }


Describe: toppingOnePrice()

Test: "it should return a Pizza object with three properties for topping, size, and price."

Code: 
const myPizza = new Pizza(['Veggies','Cheese'], size: 'Large', 4.99);

Expected Output: myPizza { toppings:['Veggies', 'Cheese'], size: 'Large', price: 4.99 }


Describe: toppingTwoPrice()

Test: "It should return the cost of adding cheese to a pizza" 

Code:
const myPizza = new Pizza ('Cheese');

Expected Output: price: 1


Describe: sizePrice()

Test: "It should return the cost of a small pizza"

Code:
const myPizza = new Pizza('Cheese', 'Small');

Expected Output: price: 10

## Known Bugs

* _No known issues_

## License

_[MIT](https://en.wikipedia.org/wiki/MIT_License)_

Copyright (c) _2022_ _Z Perez_