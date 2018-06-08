// 1. Create an array `names` with at least 3 elements: `'david'`, `'gordon'`, and
//    `'sahil'` and log it to the console
const names = [ 'david',
    'gordon',
    'sahil',];

console.log(names);

// 2. Log the value of the third element in `names` to the console
console.log(names[2]);

// 3. Log the value of the `names` array's `length` property to the console
console.log(names.length);

// 4. Set the value of the `length` property to `1`
names.length = 1;

// 6. Once again, log the value of the `names` array's `length` property to the
//    console. Did it change?
console.log(names.length);

// 7. Log the entire `names` array to the console again
console.log(names);

// 8. Add a few more elements to the array using `push`
names.push('min','zhuang','chew');

// 9. Log the last element of the array to the console
console.log(names[names.length -1]);

// 10. Log the second last element of the array to the console
console.log(names[names.length -2]);

// 11. Change the `textContent` property of the _second_ `p` tag on the page to
//    `"JavaScript was here!"`
const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);
paragraphs[1].textContent = "JavaScript was here!";
// can also work with document.querySelectorAll('p')[1].textContent = "JS here"

// 12. Convert the `names` array to a string, with each element separated by a
//    '<br>'. Store it in a new variable called `namesString` e.g. if `names` is
//    `['harry', 'ron', 'dean']` then `namesString` will be `"harry<br>ron<br>dean"`
const namesString = names.join("<br>");
console.log(namesString);

// 13. Change the `innerHTML` property of the _first_ `p` tag on the page to
//    `namesString`. What happens when you use `textContent` instead of
//    `innerHTML`?
console.log(paragraphs[0].innerHTML);
(paragraphs[0].innerHTML) = namesString;
console.log(paragraphs[0].innerHTML);

// What happens when you use 'textContent' instead of innerHTML.
//textContent does not interpret HTML tags that you put into its value but innerHTML does

console.log(paragraphs[0].textContent);
