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

const pi=3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of the circle:");
radius = Number(radius);

circumference = 2 * pi * radius;

console.log(circumference);

document.getElementById("mysubmit").onclick = function (){
    document.getElementById("mytext").value;
    radius=Number(radius);
    circumference = 2 * pi * radius;
    document.getElementById("myh3").textContent = circumference +"cm";
    
}