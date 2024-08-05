// var a=100;

// console.log("hello",a); // 100


function func1(){
    console.log("func1",a); // 100
}

function func2(){
    var a=200;
    console.log("func2",a); // 200
    func1();
}