/// Q no 1 ///

//write a function which returns array. call the function and destructure array values and print the value



// function destructuring() {
//     return ["karachi" , "lahore" , "islamabad" , "quetta"];
//   }
  
//   let a, b , c , d;
//   [a, b , c , d] = destructuring();
//   console.log(a); 
//   console.log(b);
//   console.log(c);
//   console.log(d);

//   document.write(`${a}   ${b}   ${c} ${d}`)


  ////Q no 2////

  // Make a car object with model, year, color. display all the values by destructuring


//   let car = {
//       model : "swift" ,
//       colour : "red" ,
//       year : 2021 
//   }

//   let { model , colour , year} = car;
//   console.log(model)
//   console.log(colour)
//   console.log(year)


////Q no 3////

// use three variable name, greeting and display value using template literals

// let name1 = "sara";
// let name2 = "hina";
// let name3 = "aisha";

// console.log(`Hello ${name1} 
//  Hello ${name2}
//  Hello ${name3}`)



////Q no 4////

// use array [1,2,3,4,5,6,7,8,9,10] assign first three values in seperate variables and all remaining in one element as an array



// const numb = [1,2,3,4,5,6,7,8,9,10];

// const [num1 , num2 , num3 , ...rest] = numb

// console.log(num1)
// console.log(num2)
// console.log(num3)
// console.log(rest)



////Q no 5////

// if car speed is less than 80 display "car speed is slow", if greater than 80 but less than 120 than display 
// " car speed is moderate" and if greater than 120 display "car speed is fast"


// let carSpeed = prompt("enter your car speed");

// let check ;

// check = ( carSpeed <= 80) ? "car speed is slow" : (carSpeed > 80 && carSpeed < 120) ? " car speed is moderate" :( carSpeed > 120 )? "car speed is fast" : "enter your car speed"
// alert(check)







//////////////  Assignment  no 3///////////




///Q no 1
   
//write a program which shows the couter after each second.


// function counter(){
    
    
//     console.log(`Hello Class`)
// }

// setInterval(counter,1000)



///Q no 2

// write a function which takes your name and displays the greeting with your name



// function greeting(name) {
//   return "Hello, " + name + "!";
//   }
  
//   var myName = prompt("What's your name?");
//   alert(greeting(myName));



  ////Q no 3

// write a function(arrow function) which takes two values and return its sum as a result


// let a = 10;

// adding = () => {
//   return a + 5
// }
// let add = adding()
// console.log(add)



///Q no 4

//write a function(arrow function) which takes a number and multiply it with 0.5 and return the new value. print the new value outside the function


  // let num = +prompt("enter value")
  // let sum = num * 0.5;

  //   myFunc = () => {
  //     return `new value after multiply 0.5 is ${sum}`
  //   }

  //   let ans = myFunc()
  //   alert(ans)



///Q no 5

//print simple array of [1,2,3,4,5] with the help of array map funtion


// const  arr = [1,2,3,4,5]

//   arr.map((a) =>{
//   console.log(a)
// })



///Q no 6

// let arr = [{id:1,name:"abc"},{id:1,name:"efg"},{id:2,name:"hij"},{id:3,name:"xyz"}]
// iterate the given array through map function and print the name and id


// let records = [
//   {id: 1, name: 'Almas', qual:'BS'},
//   {id: 2,name: 'Tooba', qual:'Matric'},
//   {id: 3,name: 'Jaweria', qual:'BS'},
//   {id: 4,name: 'Shabana', qual:'Inter'}
// ]

// records.map((a) => {
//   console.log(`stu name : ${a.name}  stu id  : ${a.id}`)
// })
