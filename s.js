


















// select an element by "ID"
 










//Document object Model (DOM) in javascript 
//Dom tree help karta ke javascript html ko change kare sake kuch upadate kar sake
//add kar sake delete kar sake ya kuch change kar sake









///Hoisting in javscript

// hello();
// function hello(){
//   console.log("hellow world");

// }

//use strict mode in javascript
//iska use isliye karte hai java script variable ko khud se declare kar deta hai 
//jab ham strict mode laga dete to kisi variable ko bina declaration ke use nahi kare sakte
//ex
// x=4;
// console.log(x);
//output 4 ayega
//kiyoki js khud se variable ko declare kar dega

 //abb use kate hai use strict ka 
//  "use strict"
//  x=4;
//  console.log(x);
//aab error dega use strict lagane ke ham bina declaration koi bhi variable use nahi kar sakte


















// Nested object in javascript object ke andar kai sare nested object bana sakte hai
// var user={
//   id:101,
//   email:"abc@gmail.com",
//   personalInfo:{
//     name:"usama",
//     address:{
//       street:"degsge",
//       city:"Delhi",
//       country:"india",

//     }
//   }
// };
// // console.log(user);
// // console.log(user.personalInfo);
// // console.log(user.personalInfo.address);
// console.log(user.personalInfo.address.country);



































//objects Prototypes in javascript
// function Student(first,last, age,cls){
//   this.firstName=first;
//   this.lastName=last;
//   this.age=age;
//   this.class=cls;
// }
// Student.prototype.nationalty="indian";
// Student.prototype.name=function(){
//   return this.firstName+" "+this.lastName;
// }

// var student1=new Student('usama','mohd','23',3);
// var student2=new Student('usama','mohd','23',3);

// console.log(student1);





























// object constructor function in javascript
// function Student(first,last, age,cls){
//   this.firstName=first;
//   this.lastName=last;
//   this.age=age;
//   this.class=cls;
//   // student1.Nationalty='indian'; 
//   // this.name=function(){
//   //   return this.firstName+" "+this.lastName;
// }

// var student1=new Student('usama','mohd','23',3);
// var student2=new Student('usama','mohd','23',3);
// // student1.Nationalty='indian';//ye bhi constructor me add nahi hua hai ye student 1 ke sath add hua hai.
// //ye constructor me add nahi hua ye particular student 1 ke sath hua hai;

// console.log(student1.name());








//getter and setter function in javscript yeh jab kam ata hai jab aap data ko manipulate karke bhejan chahte ho object ke bahar tab apka ye getter function kam ayega

//  var person={
//  name:"vishwajeet",
//  age:25,
//  get getname(){
//    return this.name.toUpperCase();
//  }
//  };
//  person.name="ajit";
// console.log(person.getname);

//set fucntion in js

//  var person={
//  name:"vishwajeet",
//  age:25,
// set setname(n){
//   this.name=n.toUpperCase();

//  }
//  };
//  person.setname="ajit";
// console.log(person);








// new keywrod in javascript
// var person=new Object();
// person.name="vishwajeet kumar";
// person.age=25;
// console.log(person.name);











//Date object in javascript
// let x=new Date(2018,11);
// console.log(x);

// let x=new Date("october 13, 2018 11:12:33");//se the date this format
// x.setDate(11)//chage date month time set modify throuth set m/d
// console.log(x.getDay());//through the getTime() m/d ye milesecond me dikhayega
// x.setSeconds(2);
// let x=new Date("october 13, 2018 11:12:33");
// x.setDate(x.getDate() +50);
// console.log(x);

//is tareke sai next 50 days after ki ham date dekh sakte hai
// let x=new Date("october 13, 2018 11:12:33");
// let y=new Date("october 13, 2018 11:12:33")
// y.setDate(x.getDate() +50);
// console.log(x);
// console.log(y);

//compare two date
//  let x=new Date("october 22, 2022 11:12:33");
//  let y=new Date(); 
//  if(y>x){
//    console.log("x is past date");
//  }
//  else if(x>y){
//    console.log("x is future date");

//  }
//  else{
//    console.log("x is same date");
//  }





//Random number in javascript
// let x=Math.random();//ye aik number generate karta wo number o se leke 1 ke bich ka hota hai
// console.log(x);

// let x=Math.floor(Math.random()*10)+1;//isse ham 1 to 10 tak ke integer random no generate karwa sakte hai
// console.log(x);
 
// agar hame 15 se leke 24 tak random number generate karwane hai to to uske liye foumulla hai
// let x=Math.floor(Math.random() *(25-15))+15;
// console.log(x);


//function ke through kasy kar sakte hai genetate 10 between 20 numbers
// function getRandom(min,max){
//   let x=Math.floor(Math.random()*(max-min+1))+min;
//   return x;
// }
// console.log(getRandom(10,20));





//Math object in javascript and math funciton in js and Math object in javascrript
// var x=Math.round(4.2);
 
// console.log(x);
// var x=Math.ceil(4.1);//this method is used to see the next value no seen the point
 
// console.log(x);
// var x=Math.floor(4.1);
 
// console.log(x);
// var x=Math.trunc(4.8);//yeh function point ko hata deta hai
 
// console.log(x);


// var x=Math.pow(2,3);
 
// console.log(x);
// var x=Math.sqrt(100);
 
// console.log(x);


// var x=Math.min(4,3,2,5,6,7);
 
// console.log(x);
// var x=Math.max(4,3,5,6,7,9);
 
// console.log(x);



// what is the use of this keyword
// let person={
//   firstName:'usama',
//   lastName:'mohd',
//   sayHello(){
//     console.log("hellow my name is mohd  "+this.firstName+"and i have a"+car.brand);
//   }
// };
// let car={
//   brand:'tata',
//   moder:'safari',
// }


// person.sayHello();













// Method in javascript
 
// let person={
//     firstName:'usama',
//     lastName:'mohd', 
//   };
// person.Usama=function () {
// console.log("hi how are you");
// }
// person.Usama();


// function greet(){
//   console.log("hello!");
// }
// person.sayHello =greet;

// let person={
//   firstName:'usama',
//   lastName:'mohd',
//    usama: function(){
//      console.log("hello");
//    }
// };

// person.usama();


// 4th way new es6 me aya the usme ham function nahi likhte hai
// let person={
//   firstName:'usama',
//   lastName:'mohd',
//    usama(){
//      console.log("hello");
//    }
// };

// person.usama();

 







 // object
// let person={
//   firstName:'usama',
//   lastName:'mohd', 
// };
//  console.log(person['lastName' ]);
// console.log(person.firstName);
//modify in 

// let person={
//   firstName:'usama',
//   lastName:'mohd', 
// };
// person.age=24;
 //delete person.lastName;//this is the delete property through this property we can delete the object.
// person.firstName='talib';
// console.log(person);
//console.log('age'in person);//check the property in object give the answers true or false

//how to iterate the object property through the for in loop
// let person={
//   firstName:'usama',
//   lastName:'mohd', 
// };
// person.age=24;
// for(let key in person){
//   console.log(key+" "+person[key]);//through this we can see the all property and all value of object;
//   console.log(key);
// }



















//Anonumous Functions
// let show=function(){
//   console.log("hello");
// };
// show();

// let show=function(){
//   console.log("this is Mohd Usmaa")
// };

// setTimeout(function(){
//   console.log("this is mohd Usama");
// },3000);












// global variabel vs local variable
// let car="audi";//global variable

// function add(){
//   let result=33;//local variable
//   document.write(result);
// }
// function sub(){
//   let result=44;
//   document.write(result);
// }

// add();


// sub();







































//function in javascript parameter and argument in js   

// function MulTable(num){
//   for(i=1;i<=10;i++){
//     document.write(`${num}*${i}=${num*i}`);
//     document.write('<br>');
 
//   }
// }
// MulTable(27);
// document.write('<br>');
// MulTable(3);
// document.write('<br>');
// MulTable(4);
// document.write('<br>');
// MulTable(5);


//two argument function

// function add(num1,num2)
// {
//   document.write(num1 + num2);
// }
// add(5,7);



//store the parameter in array through the arguments function
// function add()
// {
//   if(arguments.length==0)
//   {
//     console.log("No arguments passed !");

//   }
//   else{
//     let sum=0;
//     for(let i=0;i<arguments.length;i++){
//       sum=sum+arguments[i];
      
//     }
//     console.log(sum);
//   }
//   }
//   let addition = add;
//  addition(4,5);
//  add(2,4);

// Return function in javascript;
// function add(a,b){
//  let d=[3,9,3,5,6,];
//  return d;
// }
// let c=add(2,5);

// document.write(c);

// 3 return fucntion used in compare the variable
// function compare(a,b){
// if(a>b){
//   return 1;

// }
// else if(b>a){
//   return -1;
// }
// else{
//   return 0;
// }
// }

//  let c=compare(6,6);
//  document.write(c);












//for and foreach loop through the acces the arrray.
// let book=['math', 'physics','bio','computer science'];
// let booklength=book.length;

// for(i=0;i<book.length;i++){
//   console.log(`Element ${i} is ${book[i]}\n`);
// }
// book.forEach(myfu);
// function myfu(value){
//   console.log(value);
// }



















//Multidimensional Array
// let book=['math', 'physics','bio','computer science'];
// let bookWithPages=[
//   ["Math","300"],
//   ["physics","500"],
//   ["Bio","400"]
// ];
// let fetch=bookWithPages[1][0];
// console.log(fetch);






//how to combine two  more array

// let book=['math', 'physics','bio','computer science'];
// let book2=['hindi','englis'];
// let book3=['punjavi','urdu'];
// let NewBook=book.concat(book2 ,book3);
// console.log(NewBook);















//Array in javascript and acces the array element 
// let book=['math', 'physics','bio','computer science'];
// book[1]="english";
// book[2]="operating system";
//  let asset=[1,3,"math",100];
// console.log(book);


//Operation in Array
// let book=["math","physics","bio","computer science"];
// book.push("hindi");//add book last of the array
// book.unshift("hindi");// add book first of the array
// book.pop(); //is used to remove the element last of the array jitne bar use karege utne bar hat ta jayega
// book.pop(); 
// book.shift();// agar array ke starting me se element hatana hai to use karege 
// book.splice(2,1);//this method is used remove the element begening of the array.
// book=[];//array ko empty is method se karte hai waise to 2 m/d hote hai
// book.length=0;//second m/d empty the array
// console.log(book);



 
































//find out the string character position.
// let str="this is javascript tutorial. it is good tutorial.";
// // let position =str.indexOf('good');
// let position =str.indexOf('is',6);
// //let position =str.lastIndexOf('good');
// console.log(position);

//remove the space string
//  let str="this is javascript tutorial. it is good tutorial.";

//  let trimedStr=str.trimEnd(str);
//  console.log(str);
  


//convert string lower and upper case through the javascript function
//let str="this is javascript tutorial. it is good tutorial.";
// let usama=str.toUpperCase();
// let usama=str.toLowerCase();
// console.log(str);
// console.log(usama);

//how to rplace the string through the javascript function
  // let str="this is javascript tutorial. it is good tutorial.";
// let tala=str.replace('javascript','python');
// console.log(str);
// console.log(tala);








// let str="this is javascript tutorial. it is goog turorial";
// let substring=str.substr(8,19);
// console.log(substring);


// let str1="mohd";
// let str2="usama";
// let str3=str1.concat(" " ,str2);
// console.log(str3);



// let str="usama";
// if("Usama"==str){
//   console.log("Equal");
// }else{
//   console.log("not equal");
// }





//this is type conversion string to boolean
// let type="hello";
// console.log(typeof type);
 
// let type2=Boolean(type);
// console.log(type2);
// console.log(typeof type2);


























//nested loop in javascript
// for(let counter=1;counter<=10;counter++){
 
// document.write(counter);
// document.write("<br>");
// for(let counter2= 1; counter2<3;counter2++){
//   document.write("usama");
// document.write("<br>");
// }
// }

// outer:for(let counter=1;counter<=10;counter++){
//   document.write(counter);
//   document.write('<br>');
//   for(let counter2=1;counter2 <3;counter2++){
//     if(counter==3){
//       break outer;
//     }
//     document.write("usama");
//     document.write('<br>');
//   }
// }


































//for loop in javascript
// for(let i=1;i<=100;i++){
//   document.write("usama is a good boy");
// }

//do while loop in javascript
// let counter=1;
// do{
//   document.write("usama");
//   counter++;
// }while(counter<=10);

//while loop in javascript
// let counter=1;
// let sum=0;
// while(counter <= 100){
// if(counter % 2==0){
// sum=sum+counter;
// }
//   counter++;
 
// }
// document.write(sum);
//switch statement in javascript.
// let input;

// input="4";
// switch(input){
//   case 1:
//     document.write("...continue");
//     break;

// case "y":
//   document.write("...continue");
//   break;
// case "0":
//   document.write("end...");
//   break;
//   default:
//     document.write("wrong input");
// }






































// if else conditions used this statement.
// let input;
// input ="7";
// if(input ===1){
//   document.write("continuee...");
// }
// else if(input ==="y"){
//   document.writer("continue...");
// }  
// else if(input==="yes"){
//   document.write("continue...");
// }
// else if(input==="0"){
//   document.write("End...");
// }
// else if(input==="no"){
//   document.write("End...");
// }
// else{
//   document.write("Wrong input");
// }





//this is conditional operator if else and else if condition
// let age=22;
// let hasVoterCard="yes";
// if(age>=15){
//   if(hasVoterCard=="yes"){
//     alert("you are eligible fo the voter");
//   }
//   else{
//     alert("get your voter id card");
//   }
// }

// else{
//   alert("you can not vote");
// }


 














//tell the type of data
// let x='tailib' ;

// console.log(typeof(x));






















// function fontFunction(){
//   document.getElementById('fontId').style.fontSize="50px"
// }
// fontFunction()





















// const sum=(a,b)=>a+b
// console.log(sum(1,4));



// function func(){
//   let a='Geeks';
//   if(true){
//     let a='Geeksforgeeks';
//     console.log(a);
    
//   }
//   console.log(a);
// }
// func();

// let a=35;
// let b=35;
// const sum=()=>a+b
// console.log(sum())

// function main(){
//   console.log('A');
//   setTimeout(
//   function print(){ console.log('B'); }
//   ,0);
//   console.log('C');
//   }
//   main();


// function usama(){
//   if(true){
//   var a ="mohd  Talib is a good boy";
  
//   }
//   console.log(a)
// }
// usama();

//  function usama(love){
//    if(love){
//    let name="Mohd";
//     let sname="ahmad";
//  }
//  console.log("my name is "+ name + " "+ sname);
// }
// usama(true)



// function usama(){
//   console.log("hellow world");
// }
//   function talib(){
//      console.log("i am good");
//   }
// talib();
// usama(); 
// function

//  program that shows the delay in execution

// function talib(){
//   console.log("hi talib kasy ho ");
// }
// function usama(){
//   console.log("hi i am good bhai ");
// }
// setTimeout(talib,4000)
// usama();

//eval function in javascript
// let x = prompt("enter the first numbers");
// let y = prompt("enter the second number");
// let a = "x * y";
// eval(x*y)
// console.log(x*y)


// let usama=[1,2,3,4];
// usama.push(2);
// console.log(usama);



// var a;
// document.write(a);
// document.write("<br>");
// document.write(typeof a);


// var arr =[1,2,3]
// arr[9]=99;
// arr[6]=45;
// console.log(arr)
// it is hoisting
// sum(5,5)
// function sum(a,b){
//   add =a+b;
//   console.log(add)

// }

//let x; it is undefined
//  call back function
// const usama=(Talib) =>{
//   console.log("hi usama how are you bro")
// }
// const aakil=()=>{
//   console.log("hi aakil kasy ho brother ");
// }
// usama();
// aakil();
 



//fat arrow function
// const sum =()=>{
//   let a=5;
//   let b=39;
//   return a+b;
// }
// console.log(sum())



// set time out functions
// function main(){
// console.log('A');
// setTimeout(
// function print(){ console.log('B'); }
// ,0);
// console.log('C');
// }
// main()


// let usama={

//     name:'usama',
//     disignation:'coders',
//     isActive:"yes active",
//     marks: [1,3,4,5]
// }
// console.log(usama.marks)













//push means array ke end me laga do usko shift method statrtin se hatayega element ko
//const method=[1,3,2,3,5,4]
// method.push(234)
 //method.reverse();pura array ulta ho jayega
//method.shift() 
  //method.slice(1,3) ye aik se lekar 3 tak ke element ko hata dega
 //console.log(method)


// array ke front me lagana hai isko unshift se starting me a jata hai
// const usama=[1,2,3,4,5,6,7]
// usama.unshift(5);
// console.log(usama);
  

//pop function is used to array ke end me se element ko nikallo
// const marks=[3,5,6,7,8,1,2];
// marks.pop()
// console.log(marks);