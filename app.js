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








/////  Assignment no 4 //////


//Q no 1

//We have an array of cities. Assign each city in different individual variable. hint ['LA', 'new york', 'karachi','islamabad']



// let cities =  ['LA', 'new york', 'karachi','islamabad']

//  let a , b , c , d ;
//  [a , b , c , d] = cities

//  console.log(a)
//  console.log(b)
//  console.log(c)
//  console.log(d)



//Q no 2

//We have a student object. Assign each property in different and individual variable in JS {name:'Marry',age:20,rollNo:2}


// let data = {name:'Marry' ,
//             age:20,
//             rollNo:2
//           }

//            let = { name , age , rollNo } = data

//              console.log(name)
//              console.log(age)
//              console.log(rollNo)





//Q no 3

//A function is taking 5 arguments and You have to pass it through an array.
//let arr = [1,2,3,4,5]

// array = ((a , b , c , d, e) => {
//   console.log(a);
//   console.log(b);
//   console.log(c);
//   console.log(d)
//   console.log(e)
// })

// let arr = [1, 2, 3, 4, 5]


// array(...arr);




//Q no 4


//Given an array of firstname and an array of last name. First check both array size is equal or not, if equal then make third new array which has first last name concat value
//let firstNames = ['maryam', 'hira', 'faiza', 'aisha']
//let lastNames = ['khan', 'ayub', 'aziz', 'yasin']



 let firstNames = ['maryam', 'hira', 'faiza', 'aisha'];
 let lastNames =   ['khan', 'ayub', 'aziz', 'yasin'];

 

let fullName = firstNames.map((a)=>{
    return  lastNames.map((b)=>{
        return a.concat(b)
    })
})

console.log(fullName)



//Q no 5

//Create an arrow function that takes array as an input and make each element double and then return an array


// let array = [2,4,6,8];

// let double = array.map((a)=>{
//     return a * 2
// })
// console.log(array)
// console.log(double)




//Q no 6


//Create an arrow function that takes a number and return square of a number

// let arr = [2,4,6,8];

// let result = arr.map(x => x ** 2);

// console.log(result);



//Q n0 7


/*question: `var authenticated=true;
var allowed = authenticated ? (alert('you r allowed')) : (alert('you are not allowed))
which alert will run
*/

// var authenticated=true;

// var allowed = authenticated ? (alert('you r allowed')) : (alert('you are not allowed'))


/// you are allowed




///Q no 7 


/*
question: ` What is the value of canDrive
        var age = 12;
        var canDrive = age > 18 ? 'yes' : 'no';
        `,
        answers: ['12', '18', 'yes', 'no'],
        which is correct answer
        */

       /// answer is no



// Q no 8

/*
question: `const dog='snickers'
        logdog(dog);
        function logdog(dog){
            console.log(dog)
        }
         function go(){
             const dog='sunny';
             logdog(dog)
         }`,
        answers: ['snickers sunny','sunny snickers','snickers snickers','sunny sunny'] */

        // const dog='snickers'
        // logdog(dog);
        // function logdog(dog){
        //     console.log(dog)
        // }

        // function go(){
        //     const dog='sunny';
        //     logdog(dog)
        // }

//// ans is snicker


/// Q no 9

// let text = `He's often called "Johnny"`;
//  console.log(text)// answer is  He's often called "Johnny"



///Q no 10


// function welcomeMsg(name = "Everyone") {
//     let msg = "Welcome " + name
//     console.log(msg)
// }
//  welcomeMsg("Faiza") /// print welcome faiza
//  welcomeMsg() // print welcome everyone
//I have called funtion twice , share the answer what is printed each time




///Q no 11

//make a promise that resolves after 5 sec. Use setTimeOut for resolve.

//  let timer = 5;
// let prom = new Promise((resolve , reject)=>{
     
//         setTimeout(() => {
//             if(timer < 6){
//             resolve('resolve after 5 sec')}
//             else{
//                 reject('sorry')
//             };
//           }, 5000);
          
// });
// prom
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

