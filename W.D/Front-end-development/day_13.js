

let arr = [10,20];
console.log(arr);
// arr._prototype_ = {};
// console.log(arr);
console.log(arr.map);
console.log(Array.prototype);
console.log(arr.__proto__);             // dunder method
console.log(arr.__proto__ == Array.prototype);
console.log(arr.__proto__ === Array.prototype);

let obj = {
    name: 'John',
    age: 32
}

console.log(obj.__proto__);
console.log(Object.prototype);
console.log(obj.__proto__ === Object.prototype);

console.log(arr.__proto__.__proto__);

function one(){
    let a = 10;
    console.log(a);
}

one();

console.log(arr.__proto__.__proto__);

