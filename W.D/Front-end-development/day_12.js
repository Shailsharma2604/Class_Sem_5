// console.log(567);


// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//     resolve('p1');
//     }, 1000);
// })
  
// p1.then((value) => {
//     console.log(value);
//     return 'p2';
// })
  
// p1.catch((value) => {
//     console.log(value);
//     return 'p3';
// })


let response = fetch('https://jsonplaceholder.typicode.com/posts')
// console.log(response);
response.then((data) => {
    console.log(data);
    return data.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})






  