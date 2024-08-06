// var a=100;

// f1();
// function f1(){
//   console.log(a);
//   var a=200;
//   console.log("hello");
// }

// console.log(a);

// let o=100;     //are created in globe scope and can be accessed in any function
// var l=222;
// const p=333;
// function fun1(){
//     let a=100;
//     console.log("fun1");
//     function fun2(){
//         console.log("fun2");
//         console.log("a",a);
//         console.log("o",o);
//         console.log("l",l);
//         console.log("p",p);
//         // console.log(a);
//     }
//     fun2();
// }

// fun1();


// function fun1(){
//     var a=100;
//     console.log(a);
// }

// fun1();
// console.log(a);


// {
//     console.log(a);
// }

// var a=100;

// function x (){
//     var a=200;
//     console.log(a);
// }

// x();
// console.log(a);



// function fun1(){
//     let a=100;
//     return function fun2(){
//         console.log(a);
//     }
    
// }
// fun1()();

function fun1(){
    function fun2(){
        console.log("fun2");
    }
    return fun2;
}

console.log(fun1()());
