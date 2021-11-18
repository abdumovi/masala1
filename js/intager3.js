let a = 765;

let birlik = a % 10;

let onlik = (a - birlik) % 100;

let yuzlik = (a - onlik - birlik) / 100;

let result = birlik * 100 + onlik + yuzlik;

console.log(result);