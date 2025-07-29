// console.log(`Hello`);

// window.alert('Hello, world!');

// This is a comment

// document.getElementById(`myH1`).textContent = 'Hello, world!';
// document.getElementById(`myP`).textContent = 'This is a paragraph.';

/*This is a multi-line comment
that spans multiple lines*/

// let x;
// x=100;
// let y=230;
// console.log(x);
// console.log(y); 

// let name = 'Adeen Mir'; 
// let age=22;
// let price=22.2;
// let gpa=2.1;

// console.log(typeof name); // string
// console.log(`Hello, ${name}!`);
// console.log(`You are ${age} years old.`);
// console.log(typeof age); // number 
// console.log(`Your GPA is ${gpa}.`); 

//let name = 'Adeen Mir'; 
//let age = 22;
//let isstudent=true;
//
//console.log(`Enrolled: ${isstudent}`);
//document.getElementById("p1").textContent = `your name is ${name}`;
//document.getElementById("p2").textContent = `your age is ${age}`;
//document.getElementById("p3").textContent = `Enrolled: ${isstudent}`;

 let students=30;
// students=students+1;
// students=students-1;
// students=students*2;
// students=students/2;
//students=students ** 2;
//let extrastudents=students % 2;

//students++;
//students--;

//parenthesis
//exponent
//multiplication and division and modulus
//addition and subtraction

// let result=1+2*3+4**2;

// console.log(students);

// let username;
// username = window.prompt("whats your name?");

// console.log(username);

//document.getElementById("mysubmit").onclick = function() {
//    username=document.getElementById("mytext").value;
//    document.getElementById("myH1").textContent=`Hello ${username}`;
//}

// let age=window.prompt("How old are you?");
// age=Number(age);
// age+=1;
// console.log(age, typeof age);

// let x="pizza";
// let y="pizza";
// let z="pizza";

// x=Number(x);
// y=String(y);
// z=Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

//const pi=3.14159;
//let radius;
//let circumference;
//
//radius = window.prompt("Enter the radius of the circle:");
//radius = Number(radius);
//
//circumference = 2 * pi * radius;
//
//console.log(circumference);
//
//document.getElementById("mysubmit").onclick = function (){
//    document.getElementById("mytext").value;
//    radius=Number(radius);
//    circumference = 2 * pi * radius;
//    document.getElementById("myh3").textContent = circumference +"cm";
//    
//}

// let x=3;
// let y=2;
// let z=1;
//z=Math.round(x);
//z=Math.floor(x);
//z=Math.ceil(x);
//z=Math.trunc(x);  // removes decimal part
//z=Math.pow(x, y);     // x raised to the power of y
//z=Math.log(x);  // natural logarithm of x
//z=math.abs(x);  // absolute value of x(positive numbers only)
//z=math.sign(x);  // sign of x (-1 for negative, 0 for zero, 1 for positive)
//z=Math.sqrt(x);  // square root of x
//.min
//.max
// let max =math.max(x, y, z);  // maximum value among x, y, z
// console.log(max);

//let randomNumber = Math.floor(Math.random()*6); // generates a random number between 0 and 1
//console.log(randomNumber);

//count min=50;

// const btn = document.getElementById("btn");
// const mylabel1 = document.getElementById("mylabel1");
// const mylabel2 = document.getElementById("mylabel2");
// const mylabel3 = document.getElementById("mylabel3");
// const min= 1;
// const max=6;
// let randomNumber1;
// let randomNumber2;
// let randomNumber3;

// btn.onclick = function() {
//     randomNumber1=Math.floor(Math.random()*max)+min;
//     randomNumber2=Math.floor(Math.random()*max)+min;
//     randomNumber3=Math.floor(Math.random()*max)+min;
//     mylabel1.textContent=randomNumber1;
//     mylabel2.textContent=randomNumber2;
//     mylabel3.textContent=randomNumber3;
//}

// const mytext=document.getElementById("mytext");
// const mysubmit=document.getElementById("mysubmit");
// const result=document.getElementById("result");
// let age;

// mysubmit.onclick = function() {
//     age=mytext.value
//     age=Number(age);
//     if(age >=100){
//         result.textContent = "You are a centenarian!";

//     }
//     else if(age>18){
//         result.textContent = "You are an adult.";
//     }
//     else if(age==0){
//         result.textContent = "You are a newborn.";
//     }
    
//     else if(age<0){

//         result.textContent = "Age cannot be negative.";
//     }
//     else if(age<18){
//         result.textContent = "You are a minor.";
//     }
//     else if(age==0){
//         result.textContent = "You are a newborn.";
//     }
//     else{
//         result.textContent = "Invalid age.";
//     }
    
// }


// const person{
//     firstname: "Adeen",
//     latname: "Mir",
//     age: 22,
//     isStudent: true,
// }
// console

// 
// class product {
//     constructor(name, price, quantity) {
//         this.name = name;
//         this.price = price;
//         this.quantity = quantity;
//     }

//     displayProduct(){
//         console.log(`Product : ${this.name}`);
//         console.log(`Price : $${this.price}`);
//     }

//     calculateTotalPrice(tax) {
//         return this.price+(this.price*tax)
//     }
// }
// const tax = 0.05; // 5% tax

// const product1 = new product("Laptop", 1200, 5);
// const product2 = new product("Smartphone", 800, 10);
// const product3 = new product("Tablet", 400, 15);

// product2.displayProduct();
// const totalPrice = product1.calculateTotalPrice(tax);
// console.log(`Total price after tax: $${totalPrice.toFixed(2)}`);

// class Animal{
//     constructor(name, age){
//         this.name = name;
//         this.age = age
//     }
// }
// class Rabbit extends Animal{
//     constructor(name,age,runspeed){
//         super(name,age);
//         this.runspeed = runspeed;
//     }
// }
// class fish extends Animal{
//     constructor(name,age,swimspeed){
//        super(name,age);
//         this.swimspeedpeed = swimspeed;
//     }
// }
// class hawk extends Animal{
//     constructor(name,age,flightspeed){
//        super(name,age);
//         this.flightspeedspeed = flightspeed;
//     }
// }
// const rabbit1 = new Rabbit("Bunny", 2, 30);
// const fish1 = new fish("Goldy", 1, 10);
// const hawk2 = new hawk("Sky", 3, 50);

// console.log(hawk2.name);
// console.log(rabbit1.runspeed);
// console.log(rabbit1.name);
// console.log(rabbit1.age);

// class Person {
//     constructor(name, age, ...address) {
//         this.name = name;
//         this.age = age;
//         this.address= new Address(...address);
//     }
    

// }
// class Address {
//     constructor(street, city, country) {
//         this.street = street;
//         this.city = city;
//         this.country = country;
//     }
// }
// const person1 = new Person("Adeen", 22, "123 Main St", "New York", "USA");
// console.log(person1.address.street);

// const cards=[`A`,2,3,4,5,6,7,8,9,10,`J`,`Q`,`K`];
// shuffle(cards);

// console.log(cards);
// function shuffle(array){
//     for(let i=array.length-1;i>0;i--){
//         const random=Math.floor(Math.random()*(i+1));
//     [array[i],array[random]]= [array[random],array[i]];
//     }
// }

// const box = document.getElementById("box");

// // Initial position
// let posX = 100;
// let posY = 100;
// const step = 10;

// document.addEventListener("keydown", (e) => {
//   switch (e.key) {
//     case "ArrowUp":
//       posY -= step;
//       break;
//     case "ArrowDown":
//       posY += step;
//       break;
//     case "ArrowLeft":
//       posX -= step;
//       break;
//     case "ArrowRight":
//       posX += step;
//       break;
//     default:
//       return; // ignore other keys
//   }


//   // Apply the new position
//   box.style.left = `${posX}px`;
//   box.style.top = `${posY}px`;
// });
