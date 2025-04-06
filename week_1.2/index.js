function sum(num1, num2,fnToPass){
  let result = num1 + num2;
  // return fnToPass(result);
  fnToPass(result);
}

function displayResult(data){
  console.log("Result of sum is : " + data)
  // return data;
}

// console.log(sum(1,5,displayResult))
// sum(1,2,displayResult)


//replace

// const str = "praveen bisht";
// console.log(str.replace("pra", "gudda"))

// const str1 = "praveen bisht";
// console.log(str.replace("prv", "gudda"))



const value = "hi my name is praveen bisht"
console.log(typeof value);
const words = value.split(" ");
console.log(words);
console.log(typeof words);
for(let i=0; i<words.length; i++){
  console.log(words[i]);
}

