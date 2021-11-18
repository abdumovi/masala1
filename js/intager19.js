let a = 241;

let b = a % 10;

let c = ( a  - b) % 100;

let j = ( a  - (b + c)) / 100;

c /= 10;
console.log(j + c + b);
console.log(j * c * b);

