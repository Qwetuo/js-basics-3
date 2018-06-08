// 1. Create a new array `shoppingList` with a few string elements
const shoppingList = ['toothpaste', 'brush', 'cake', 'drinks']

// 2. Using `forEach`, log every element of the `shoppingList` array to the console
shoppingList.forEach((item) => {
    console.log(item)
    }
)

// 3. For each element in the `shoppingList` array, create an `<li>` node and
//    append it to the `<ul>` element on the page (use `document.createElement`
//    and `.appendChild`)

function appendLi(item){
    document.querySelector('ul').appendChild(document.createElement('li')).textContent = item;
}

shoppingList.forEach(appendLi);

/*
another solution
shoppingList.forEach((item) => {
    const newListItem = document.createElement('li');
    newListItem.textContent = item;
    document.querySelector('ul').appendChild(newListItem);
})
*/

// 4. Create a new array `numbers` with a few numeric elements

const numbers = [1,2,3,4,5,6,7,];

// 5. Using `map` on the `numbers` array, create a new array called
//    `squareNumbers` where each element is the square of the corresponding
//    element in the `numbers` array


const square = n => n*n

const squareNumbers = numbers.map(square);
console.log(squareNumbers);