// const dog = {
//   name : "dog",
//   legCount : 2,
//   speaks : "Bhow bhow",
// }

// const cat= {
//   name : "cat",
//   legCount : 2,
//   speaks : "meow meow",
// }
// console.log("Animal = " + dog.name + " " + dog.speaks)
// console.log("Animal = " + cat.name + " " + cat.speaks)


function printStr(animal){
  console.log("Animal = " + animal.legCount + " " + animal.speaks)
}

// printStr(cat);
// printStr(dog)



//or 

class Animal{
  constructor(name, legCount, speaks){
    this.name = name,
    this.legCount = legCount,
    this.speaks = speaks
  }
  
  static myType(){
    console.log("I am animal")
  }

  speak(){
    console.log(this.speaks);
  }
}


let dog = new Animal("dog", "4", "bhow bhow")
let cat = new Animal("cat", "4", "meow meow")
// console.log(dog.name)
// dog.speak();
// Animal.myType()
// console.log(cat.name)
// cat.speak();
// Animal.myType()




function calculateSum(){
  let a = 0;
  for(let i= 0; i<100000; i++){
    a = a + i;
  }
  console.log(a);
}


// const beforeDate = new Date();
// const beforeTimeInMs = beforeDate.getTime();
// calculateSum();
// const afterDate = new Date();
// const afterTimeInMs = afterDate.getTime();
// console.log(afterTimeInMs - beforeTimeInMs)



const user = {
  name : "praveen",
  age : 24,
  gender : "male"
}

const user1 = JSON.stringify(user);
console.log(typeof user1);
console.log(user1)
console.log(user1["name"])
console.log(user)
console.log(typeof user);
console.log(user["name"])