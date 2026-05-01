//function declaration
// function can be declared anywhere in the program.
// greet();
// function greet(){
//     console.log('Hii');
// }

// function expression 
//function expressions has too be written before calling the function
// // you can't call an expression above the expession  
// const speak = function(){
//     console.log('good day!');
// }

// speak();



// //
// const greeting = function(name) {
//     console.log(`Good morning ${name}`);
// }
// greeting('Priyanshu');

// const arthematic = function(operator, num1, num2){
//     if (operator === '+'){
//         console.log(num1+num2);
//     }
// }
// arthematic("+", 5, 7)


//returning values

// const area = function(radius){
//     let area = 3.14 * radius**2;
//     return area;
//     // return 3.14 * radius**2;
// }
// let a = area(5);
// console.log(a); 

// arrow function

// const area = radius => 3.14 * radius**2;
// const product = (num1, num2) => num1*num2;
// c = product(10, 34);
// console.log(c)
// b = area(10);
// console.log(b); 

// practice arrow function

// turning normal function into arrow function
// const greet = function(){
//     return 'hello world';
// }
// const greet = () => 'hello world';

//
// const bill = function(products, tax){
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i]*tax;
//     }
//     return total;
// }


// const bill = (products, tax) =>{
//     let total = 0;
//     for(let i = 0; i< products.length; i++){
//         total +=  products[i] + products[i]*tax;
//     }
//     return total;
// }
// console.log(bill([10, 45, 67, 78], 0.2))


//
// const myFunc = (callbackFunc) =>{
//     let value = 50;
//     callbackFunc(value);
// }
// myFunc(function(value){
//     console.log(value);
// });

// let people = ['luffy', 'ace', 'sabo', 'zoro', 'sanji']
// people.forEach((person, index) => {
//     console.log(index, person);
// });

// const logPerson = (person, index) => {
//     console.log(`${index} - Hello ${person}`);
// };
// people.forEach(logPerson)

const ul = document.querySelector('.people');
const people = ['luffy', 'ace', 'sabo', 'zoro', 'sanji'];

let html = ``;

people.forEach(person => {
    // create html template
    html += `<li style="color: purple">${person}</li>`;
});
console.log(html);
ul.innerHTML = html;