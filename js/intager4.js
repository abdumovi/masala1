let a = 555;

let num2 = a % 100;

let num3 =  num2 % 10;

let onlik = num2 - num3;

let yuzlik = a - num2;

let b = yuzlik / 10;

let result = onlik * 10 + b + num3;

console.log(result);