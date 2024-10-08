const fs = require('fs');
const express = require('express');

const value = 10

console.log("first line");

setTimeout(() => console.log("second line"), 0);

fs.readFile('app.txt', 'utf8', () => {
    console.log("file read");
    })

function multipy(a, b) {
    return a * b;
}

const result = multipy(value, 3);
console.log(result);