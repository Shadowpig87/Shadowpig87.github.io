//variable = A container that stores value. 
// behaves as if it were the value it contains.
// 1. declaration let x;
//2. assignment x=100;


/*let firstname = "Bro";
let grade = 95
console.log(`grade`);
console.log(`You grade is ${grade}`)
console.log(`type of firstname`)
console.log(`Your name is ${firstname}`)
document.getElementById("myH1").textContent=`Hello World`;*/

//window.alert(`My Application`)

/*let online = false;
let forsale = true;

console.log(`Bro is online; ${online}`);
console.log(`is this car for sale; ${true}`);

let fullname = "Daniel Shapiro"
let age = 13;
let isStudent = true;
let isCool = true;


document.getElementById("p1").textContent = `My name is ${fullname}`;
document.getElementById("p2").textContent = `My age is ${age}`;
document.getElementById("p3").textContent = `Am I a student? ${isStudent}`;
document.getElementById("p4").textContent = `Is Daniel Shapiro Cool? ${isCool}`;*/

let username;



document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
  console.log(username)
   document.getElementById("p5").textContent = `Welcome ${username}`
   document.getElementById("p6").textContent = `${username}`
;
}