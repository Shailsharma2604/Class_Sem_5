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


// let response = fetch('https://jsonplaceholder.typicode.com/posts')
// // console.log(response);
// response.then((data) => {
//     console.log(data);
//     return data.json();
// })
// // .then((data) => data.json())
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.log(error);
// })


// Promise.all([p1, p2, p3]).then((values) => {
//     console.log(values);
//     Promise.all([p4, p5, p6]).then((values) => {
//         console.log(values);
//     })
// })





// let response = await fetch('https://jsonplaceholder.typicode.com/posts')
// response.then("res: ",response)



// async function fetchData() {
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts')
//     let data = await response.json()
//     console.log(data);
// }
// fetchData()




let response = await fetch('https://jsonplaceholder.typicode.com/posts')
let data = await response.json()
console.log(data);



