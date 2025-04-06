//async functions
// function findSum(n){
//   let ans = 0;
//   for(let i=0; i<n; i++){
//     ans = ans + i;
//   }
//   return ans;
// }

// function findSumTill1000(){
//   console.log(findSum(10000000000));
// }

// // findSumTill1000();
// setTimeout(findSumTill1000,1000);

// console.log("hi praveen")



// const fs = require('fs')
// //filesystem module

// fs.readFile("a.txt", "utf-8" , function(err,data){
//   console.log(data);

// })


// console.log("hiiiiii")


//callback
// function fetchData(callback){
//   setTimeout(() => {
//     let data = {name : "praveen", age: 24}
//     callback(data);
//   },2000)
// }

// const fn = function(result){
//   console.log(result);

// }

// fetchData(fn)


//callback hell

//when multiple callbacks are nested, the code can become hard to read and maintain, known as "callback hell"

function step1(callback){
  setTimeout(() => {
    console.log("step 1 completed")
    callback();
  },1000)
}


function step2(callback){
  setTimeout(() => {
    console.log("step 2 completed")
    callback();
  },1000)
}

function step3(callback){
  setTimeout(() => {
    console.log("step 3 completed")
    callback();
  },1000)
}


// step1(function(){
//   step2(function(){
//     step3(function(){
//       console.log("All good")
//     })
//   })
// })

//or

// step1(() => {
//   step2(() =>{
//     step3(() => {
//       console.log("All steps completed")
//     })
//   })
// })


//chaining promises

function step1(){
  return new Promise((resolve,reject) => {
    setTimeout(() =>{
      console.log("step 1 completed")
      resolve();  //it is connected to .then() function
      // reject()
    },1000)
  })
}

function step2(){
  return new Promise((resolve) => {
    setTimeout(() =>{
      console.log("step 2 completed")
      resolve();
    },1000)
  })
}

function step3(){
  return new Promise((resolve) => {
    setTimeout(() =>{
      console.log("step 3 completed")
      resolve();
    },1000)
  })
}

// step1().then(() =>step2())
// .then(() => step3())
// .then(() => console.log("All is good"))
// .catch(() => console.log("error occured"))



//or
//async , await
async function fetchData(){
  let data = await new Promise((resolve, reject) =>(
    setTimeout(() => {
      resolve({name : "praveen", age: 25})
    },2000)
  ))
  // console.log(data)
  return data;
}

console.log(fetchData())

//promises

//ugly way

// const fs = require('fs')

// function praveenReadFile(cb){
//   fs.readFile('a.txt', 'utf-8', function(err,data){
//     cb(data);
//   })
// }


// function onDone(data){
//   console.log(data);
// }

// praveenReadFile(onDone)



//cleaner way(promises)


const fs = require('fs');

//my own asyncchronous function
function praveenReadFile(){
  return new Promise(function(resolve){
    fs.readFile('a.txt', 'utf-8', function(err,data){
      console.log(resolve(data));
    })
  })
}

//callback function to call
function onDone(data){
  console.log(data);
}

praveenReadFile().then(onDone)
console.log('hiiii')