

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

Object.prototype == arr.__proto__.__proto__;
console.log(Object.prototype == arr.__proto__.__proto__);

console.log(Object.__proto__);
console.log(Object.__proto__.__proto__);

console.log(Object.__proto__ == Function.prototype);

console.log(Array.prototype);

console.log(Array.prototype.__proto__);

console.log(Array.prototype.my = () => {console.log('my function')});

console.log(arr.my());

console.log(Array.prototype.my);

Array.prototype.a=10;
console.log(arr.a);

let cMAp = function(callback,arr){
    for(let i=0;i<arr.length;i++){
        arr[i] = callback(arr[i]);
    }
}


class MyArray{
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index){
        return this.data[index];
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop(){
        let lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }

    delete(index){
        const item = this.data[index];
        this.shiftItems(index);
    }

    shiftItems(index){
        for(let i=index;i<this.length-1;i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }
}



