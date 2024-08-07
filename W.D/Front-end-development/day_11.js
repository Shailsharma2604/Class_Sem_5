

// function one(f){                   //higher order function
//     console.log("one");
//     f();
// }

// one(function(){                    //callback function
//     console.log("two");
// });




// function checker(value, sucess, fail){  //higher order function
//     if(value > 1){
//         sucess("greater than 1");       //callback function
//     }else{
//         fail("less than 1");            //callback function
//     }
// }

// checker(10, (msg)=>{
//     console.log("msg",msg);          //callback function
// },(msg)=>{
//     console.log("msg",msg);         //callback function
// });



// setTimeout(function(){                    //callback function
//     console.log("hello");
// }, 2000);
// setTimeout(function(){                    //callback function
//     console.log("1");
// }, 3000);
// setTimeout(function(){                    //callback function
//     console.log("2");
// }, 4000);
// setTimeout(function(){                    //callback function
//     console.log("3");
// }, 5000);
// setTimeout(function(){                    //callback function
//     console.log("world");
// }, 6000);



const file = "day_11.txt";

compressFile(fileName);

encryptFile(compressFile);