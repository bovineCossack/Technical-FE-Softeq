// Test 1.
/* CSS here:
.container :nth-child(3) {
color: red;
background-color: black;
} */
const styledElement = document.querySelector('.container :nth-child(3)');
styledElement.style.backgroundColor = 'black';
styledElement.style.color = 'red';
// Test 2.
for (var i = 1; i < 99; i++) {
    if (i % 21 == 0) console.log('OpenSource');
    else if (i % 3 == 0) console.log('Open');
    else if (i % 7 == 0) console.log('Source');
    else console.log(i);
}
// Test 3.
const container = document.querySelector('.container');
const childrenOfContainer = container.children;
console.log(childrenOfContainer);
// Test 4.
function Output(input) {
    let numbers = input.filter(num => num % 1 === 0);
    let unStringed = numbers.map(Number);
    let sum = unStringed.reduce(function (a, b) {
        return a + b;
    }, 0);
    return sum;
}
Output(['1', 'a', '25', '13.1']);

// Test 5.
fetch('https://jsonplaceholder.typicode.com/posts/')
    .then((res) => {
        return res.json();
    })
    .then(json => console.log(json.filter(obj => obj.id === 5)));

// Test 6.
const re = /Softeq|\#rules/g;
// Test 7.
let upperCase = [...Array(26)].map((_, i) => String.fromCharCode(i + 65));
console.log(upperCase);

// Test 8.
