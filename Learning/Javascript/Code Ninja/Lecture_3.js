// for (let i = 1; i<=10; i++){
//     console.log(i)
// }
// console.log("loop finished.")

// const food = ['burger', 'ice-cream', 'noodles', 'pizza']
// for (let i = 0; i< food.length; i++){
//     // console.log(i, food[i])
//     let html = `<div>${food[i]}</div>`
//     console.log(html)
// }

//while loops
// let i = 0
// while (i<5){
//     console.log(i);
//     i++;
// } 

//do while 
// let i = 10;
// do{
//     console.log(`The value of i is ${i}.`);
//     i++;
// }while(i<10);


// if statements

// let age = 21;
// if (age>20){
//     console.log("You are old enough to drive a car.")
// }

// const crew = ["luffy", "zoro", "sanji", "usoop", "nami", "chopper"]
// if (crew.includes("chopper")){
//     console.log("The crew have a doctor.")
// }else{
//     console.log("The crew need a doctor.")
// }
// // logical OR || and AND &&

// const password = "@King_of_pirates";
// if (password.length > 12 && password.includes("@")){
//     console.log("The password is superr strong. ");
// }else if(password.length>10 || password.includes("@")){
//     console.log("The password is strong.");
// }

// // logical NOT (!)
// let user = false;
// if(!user){
//     console.log("Something")
// }
// console.log(!true);
// console.log(!false);


//break and continue 
// const scores = [50, 43, 44, 0, 20, 100, 45, 59]
// for( let i = 0; i< scores.length; i++){
//     if(scores[i] === 0){
//         continue;
//     }
//     console.log("your score: ", scores[i]);
//     if(scores[i]===100){
//         console.log("You got the highest scores.")
//         break;
//     }
// }


// switch statement

let grade = 'A';

switch(grade){
    case 'A':
        console.log("Congrats! You got an A.");
        break;
    case 'B':
        console.log('You got a B. Great');
        break;
    case 'C':
        console.log('You got a C. Good');
        break;
    case 'D':
        console.log('You got a D. Good Attempt, Try to improve a bit');
        break;
    case 'F':
        console.log("You got a F.Try harder");
        break;
    default:
        console.log("Invalide grade.");
}


