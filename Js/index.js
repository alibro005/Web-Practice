// "use strict";                //treat all js code as newer version

// console.log("Muhammad Ali Siddiqui");
// const aliBro = 20;
// console.log(aliBro);
// let a=3;
// let b=2;
// console.log(a**b);    //Arithmetic operators     ** as power of something
// a++ post Increment         //++a pre increment
// let age = 0;
// let status1 =(age > 18 )? "You are able to vote" : "You are not able to vote";     //teneray operator
// console.log(status1);
// let a=30;
// let b= 40;
// if(a>b)
// console.log("Yes");
// else
// console.log("No");
// alert(3+3)
// console.log(3+3)
// console.log("Hello World")
// aliBro       //camel case      (ts6 , mdn)
// let name="Hitesth"
// let age=18;
// let isLoggedIn =false;
// number => 2 to the power to 53
// bigint
// string =. ""
// Boolean => true/false
// symbol => unique
// let age=10;
// let ali=null;
// console.log(typeof age);
// console.log(typeof ali);
// let score = NaN;
// console.log(typeof score);
// console.log(typeof score);
// let valueInNumber = Number(score);
// console.log(typeof typeof valueInNumber);
// console.log(valueInNumber);
// let isLoggedIn = "ali";      //empty string false full string true
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);
// let value = 3;
// let negValue = -value;
// console.log(negValue);
// _____Concatenate two strings

// let str1 = "Hello";
// let str2 = " Ali";
// let str3 = str1 + str2;
// console.log(str3);                           //Hello Ali
// console.log("1"+2);                          // 12
// console.log(1+"2");                          // 12
// console.log("1"+2+2);                        // 122
// console.log(1+2+"2");                        // 32
// console.log(false);                          // false
// console.log(+true);                          // 1
// console.log(+"");                            // 0
// let num1, num2, num3;
// num1 = num2 = num3 = 2 + 2;
// console.log(null>0);
// console.log(null<0);
// console.log(null>=0);

//=== check equality for strict and check data type also
//  console.log("2"===2)          // false

//_______ Primitive

// Strings Boolean null undefined symbol Number BigInt
// const bigIntNumber=389338398398944n

//_______ Reference (Non-Primtive)

// Arrays Objects Functions
// const arr=[]
// {
//     Name="Muhammad Ali";
//     Age="22";          //object
// }

//Stack For primitive and heap memory for non-primitive

//_____++++Satck And Heap+++++_____

// Stack Memory

// let myYoutubeName = "Alibro@gmail.com";
// let anotherName = myYoutubeName;
// anotherName = "mas";                   // does not change orignal

// console.log(myYoutubeName);
// console.log(anotherName);

// Heap Memory

// let userOne = {
//   email: "alibro@gmail.com",
//   age: "19",
// };

// let userTwo = userOne;
// userTwo.email = "itsalibro8@gmail.com";           // changes directly to orignal
// console.log(userTwo.email);
// console.log(userOne.email);

// ______loops______

// for (let index = 0; index < 10; index++) {
//   console.log("Muhammad Ali Siddiqui");
// }

// for (let index = 0; index <= 10; index++) {

//     console.log(index);
// }

// for (let index = 10; index >=0; index--) {

//      console.log(index);
// }

// break break the itration
//continue skip the current itration

// for (let index = 1; index <= 4; index++) {
//   if (index == 3) {
//     continue;
//   } else {
//     console.log(index);
//   }
// }
// let i=1;
// while(i<5){
//     console.log("Muhammad Ali");
//     i++;
// }
// let i=1;
// do{
//     console.log(i);
//     i++;

// }while(i>5);

// let name1="Ali";
// let name2='Ali';

// let name4=`My
// name
// is                           // use backticks to write string in next lines
// Muhammad
// Ali`;

// console.log(name4);
// let firstName=new String ("Hello World")
// console.log(firstName);
// console.log(typeof firstName);
// console.log(typeof name2);

//________ Concanetating String          //using + and string interpolation

// let op1 = "Hello";
// let op2 = " World";
// let op = op1 + op2;
// console.log(op);
// ` backtick

//________String Interpolation using template literals

// let str1="Hello";
// let str2="World";
// let finalString=`${str1} and ${str2}!` ;
// console.log(finalString);

// check Length of the string

// let message = "Hello coders";

// let messageLength = message.length;
// console.log(messageLength);

//______ strings methods

// let message = "Hello coders";

// let upperCaseMessage = message.toUpperCase();
// console.log(upperCaseMessage);

// let sliceMessage = message.slice(1,9);         //doesnot include the start and end index values
// console.log(sliceMessage);           // ello cod

// let lowerCaseMessage = message.toLowerCase();
// console.log(lowerCaseMessage);

// let message = "Hello coders";

// let substr1 = message.substring(2, 8);
// console.log(substr1);          // llo co

// let substr2 = message.substring(3);
// console.log(substr2);         // lo coders

// let splittedMessage=message.split(" ");
// console.log(splittedMessage);

// let array=["Pakistan","is","the","best"];
// let joinMessage=array.join(" ");
// let joinMessage2=array.join();         //, seprate each word
// console.log(joinMessage);
// console.log(joinMessage2);

// let score = 100
// let number =new Number(100);
// console.log(number);
// console.log(number.toString().length);
// console.log(number.toFixed(2));
// let precise=3.4455234
// console.log(precise.toPrecision(1));

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.5));
// console.log(Math.floor(4.3));
// console.log(Math.ceil(4.3));
// console.log(Math.min(4,3,4,5,6,7));

// console.log(Math.random());
// console.log((Math.random()*10)+1)
// console.log(Math.floor(Math.random()*10)+1);

// const min =10;
// const max =20;
// console.log(Math.floor(Math.random()*(max-min+1)+10));

//______ Functions______

// function ali(){
//     console.log("Hello World")
// }
// ali();

// function calculatePrice(value1, value2, ...num1) {
// rest and spread operator ... depends upon use case
//   return num1;
// }
// console.log(calculatePrice(200, 400, 500, 6000));

// let user = {
//   userName: "itsalibro",
//   price: 99,
// };

// function handleObject(anyObject) {
//   console.log(
//     `My name is ${anyObject.userName} and price is ${anyObject.price}`
//   );
// }

// handleObject(user);
// handleObject({
//   userName: "Sam", // We directly pass the object to it
//   price: 199,
// });

// we can call function before and after function definition but if function is stored in a variable it is not acessed before function definition

// const myNewArr = [23, 45, 78, 98];

// function returnSecondValue(getArray) {
//   return getArray[1];
// }

// console.log(returnSecondValue(myNewArr));

// function getExp(x,y){
//    let ans =x**y;
//    return ans;
// }

// console.log(getExp(2,4));

//  let getExp = function(x,y){
//     let ans =x**y;
//     return ans;

//  }

//  console.log(getExp(2,4));

// let getExp = (x, y) => {
//   let ans = x ** y;
//   return ans;
// };

// console.log(getExp(2, 4));

// let factorial = (n) => {
//   if (n == 0) return 1;
//   return n * factorial(n - 1);
// };

// const chai =()=> {
//     let userName="Ali";
//     console.log(this);           // object
// };
// chai();

// in arrow function this is object

// const addTwo=(num1 ,num2)=>{
//        return num1+num2;          // Explicit return

// };

// const addTwo=(num1 ,num2)=>(num1+num2);       // Implicit return
// const addTwo=(num1 ,num2)=>({UserName:"Muhammad Ali Siddiqui"}) ;     // Implicit return

// console.log(addTwo(3,5));

// let ans = factorial(4);
// console.log(ans);

// let sqrt=(x,y)=>{
//       return x**y;
// };
// let answer =sqrt(3,4);
// console.log(answer);

// const user = {
//     userName:"Muhammad Ali Siddiqui",
//     price: 99,
//     functionMessage:function(){
//         console.log(`${this.userName} is the user and the price is ${this.price}`);
//         // console.log(this);
//     }
// }

// user.functionMessage();
// user.userName="MAS";
// user.functionMessage();

// console.log(typeof this);  // obj

// const arr=[2,3,4,5,7];
// arr.forEach(() => {

// });

// IIFE   Imediately Invoked Function Expression

// (function chai(){
//  console.log("Hello World");
// })() ;// We use iife to prevent disturbance from global scoped variable and it executes imediately
// // use semi colon to prvent error if use iife after iife
// (  (name) =>{
//    console.log(`DB Connected ${name}`);
// })("ALi")

//_____Array Methods____

// let arr=[1,2,3,"Hello",true];

//  let ali=arr.push("world");             // add  last value  to right most
// arr.pop("hello");              // remove last value to right most
// arr.shift();                   // remove first value left  most
// arr.unshift("Hello World");    // add first value to left most
// arr.push(20);
// arr.push(40);
// console.log(arr.slice(2,5));       // start to start end and neglect right most value
// arr.splice(2,0,"Ali");            //  add value to first index given to it and second index removes the value
// console.log(ali);                  // return the updated value of an array

// key difference between slice and splice is that in slice the orignal array remains same but in splice the orignal array doesnot remains same but depends on the indexs of the splice. Dosenot have the indexs values in it.

// console.log(arr);

// let arr=[10,20,30];
// let ans= arr.map((number)=>{
//     return number*number;
// })

// arr.map((number,index)=>{
//    console.log(number+1);
//    console.log(index);
// })

// console.log(ans);

// let arr=[2,3,4,5,8,2]
// let even = arr.filter((number)=>{
//            return number %2===0;               // fillter the value of array according to the specific condition
// })
// console.log(even);

// const codding=["Html","Js","C++"];
// codding.forEach((value) => {
//     console.log(value)
// });

// const myNum=[1,2,3,4,5,6,7,8,9,10];

// let newNum = myNum.filter((num)=>{
//    return num>4
// })

// const newNum=[];
// myNum.forEach((num) => {
//     if(num>4){
//         newNum.push(num);
//     }
// });

//______ Map , Filter and Reduce

// console.log(newNum)

// const newNum= myNum.map((num)=>{
//       return num +10
// })

// console.log(newNum)

// const newNum = myNum.map((num)=>{
//     return num*10
// }).map((num)=>{
//     return num+1            // map is used to add some to things
// })

// console.log(newNum)

// const myTotal=myNum.reduce((acc,current)=>{
//     // console.log(`accumulator ${acc} and current value ${current}`)
//          return acc + current
// },0)

// console.log(myTotal)

// const shoppingcart=[
//     {
//         itemName : "course",
//         price : 99
//     },
//     {
//         itemName : "course",
//         price : 99
//     },
//     {
//         itemName : "course",
//         price : 99
//     },
//     {
//         itemName : "course",
//         price : 99
//     }
// ]

// const priceToPay=shoppingcart.reduce((acc,item)=>{
//      return acc + item.price         // accumulator
// },0)

// console.log(priceToPay)

// let arr = [10, 20, 30, 40];
// let ans = arr.reduce((acc, curr) => {
//   return acc + curr;
// },0);
// console.log(ans);

// _____-Arrays Method

// let arr=[7,5,0,9,3,2];
// arr.sort()
// arr.reverse()
// console.log(arr);
// console.log(arr.indexOf(0));
// let  result= arr.find(num=>num>7);
// console.log(result);

// let arr = [10, 30, 40];
// let length = arr.length;
// console.log(arr.length);

// for loop( for each , in , of )

// for (let index = 0; index < length; index++) {
//   console.log(arr[index]);
// }

// arr.forEach((value) => {
//   console.log(value);
// });

// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];

//     }
// }

//______ Map
// const map=new Map()
// map.set("PK","Pakistan")
// map.set("ISL","Islamabad")

// for (const [key,value] of map) {
//     console.log(key,":",value)
// }

// const myObject={
//    game1:"Hello",
//    game2:"World"         // not itratable by map in only object
// }

// let arr = [10, 20, 30, 40, 50];

// function getSum(arr) {
//   let len = arr.length;
//   let sum = 0;
//   for (let index = 0; index < len; index++) {
//     sum += arr[index];
//   }

// let totalSum = getSum(arr);
// console.log(totalSum);

//    let sum=0;
//       arr.forEach(value => {
//         sum+=value;
//       });
//   return sum;
// }

//_____ Date In javascript

// let mydate = new Date();

// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString().split("T")[0]);
// console.log(mydate.toISOString());
// console.log(mydate.toLocaleDateString());
// console.log(typeof mydate);

// console.log(mydate.getDate());
// console.log(mydate.getDay());

// let createMyDate = new Date(2023, 8, 9,5,3);

// let createMyDate = new Date("2025-02-21");
// console.log(createMyDate.toLocaleString());

// let myTimeStamp=Date.now();
// console.log(myTimeStamp);
// console.log(createMyDate.getTime());

// console.log(Math.floor(Date.now()/1000));

// `${newDate.getDay()} and the time is ${newDate.myTimeStamp}`;

// ____objects____

// const mySym = Symbol("key1");

// let person = {
//   // objects in javascript
//   firstName: "Muhammad Ali",
//   lastName: "Siddiqui",
// //   [mySym]: "Key1", // Access  the symbol by square brackets
//   fullName: "Muhammad Ali Siddiqui", // Use square bracket notation
//   age: 19,
//   isLoggedIn: false,
//   message: function () {
//     console.log("Hi my name is" + this.firstName); // add plus to concanetate
//   },
// };

// console.log(Object.keys(person));      // made them in an array  only keys
// console.log(Object.values(person));       // made them in array only values
// console.log(Object.entries(person));       // made individual object an arrray
//console.log(person.hasOwnProperty('isLoggedIn'));      // check the object

// person.firstName = "Hello world";
// Object.freeze(person);
// person.firstName = "Ali";
// console.log(person);

// Acessing the objects elements

// console.log(typeof person);           // object
// console.log(person.firstName);         //string
// console.log(person["firstName"]);
// console.log(person["fullName"]);          // Brackect Notation
// console.log(person[mySym]);
// console.log(typeof person[mySym]);

// let person2 = new Object();             // made singleton object

// let obj = {};                 // non - singleton Object
// obj.id = "0292";
// obj.isLoggedIn = true;
// obj.name = "Hello";
// console.log(obj);

// let person = {
//   Name: "Muhammad ali",
//   fullName: {
//     user: {
//       UserName: "Hello",
//     },
//   },
// };

// console.log(person.fullName.user); // use dot dot to cover the nesting of objects

// const obj1={1:"h",2:"W"};
// const obj2={3:"A",4:"B"};
// const obj3 =Object.assign({},obj1,obj2);         // combines the values
// console.log(obj3);

// const obj3 = {...obj1, ...obj2};         // {} for spread
// console.log(obj3);

// const course={
//     courseName:"Js",
//     courseInstructor:"code",
//     price:"99"
// }

//  console.log(course.courseInstructor);
//const{courseName} = course;        // de-structure of objects
//console.log(courseName);

// person2.firstName="Muhammad Ali";
// person2.lastName="Siddiqui";
// person2.age=19;

// console.log(person2);
// console.log( typeof person2);

// let personPrototype={
//     Name:"Muhammad Ali Siddiqui"
// }
// let person = Object.create(personPrototype);   // made new empty object using .create
// console.log(person);

// person.firstName="Muhammad Ali";
// console.log(person);

//______ Arrays Methods______

// let heros = ["Batman", "superMan"];
// let heros2 = ["IronMan", "Flash"];

// heros.push(heros2);                 // makes them an element
// console.log(heros);

// const allheros = heros.concat(heros2);
// console.log(allheros)

// let allHeros=[...heros,...heros2];        // spread operator
// console.log(allHeros);

// let arr = [1, 2, 3, 4, [5, 6, 7], 8, [2, 3, 5, [4, 5, 6, 5], 5], 7];

// const realarr = arr.flat(Infinity);
// console.log(realarr);

// console.log(Array.isArray("Hello World"));
// console.log(Array.from("Hello World"));
// console.log(Array.from({name:"Muhammad Ali Siddiqui"}));  // give empty object

// const promise1 = new Promise((resolve, reject) => {
//      setTimeout(()=>{
//          console.log("In the promise");
//          resolve;
//      },1000)
// })

// async () => {
//       const data = await fetch(href="https:/linkedin.com/in");
//        await data.json();
//        console.log(data);
// }

