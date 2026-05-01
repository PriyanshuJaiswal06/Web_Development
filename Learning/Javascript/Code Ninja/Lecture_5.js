// let user = {
//     name : "Priyanshu",
//     age : "21",
//     email : "jaiswalpriyansshu792@gmail.com",
//     location : "India",
//     blogs : [ {title:'The inbetween'},
//         {title:'The society' } ,
//         {title: 'The parallels'}],
//     login : function(){
//         console.log("The user is logged in");
//     },
//     logout : function(){
//         console.log("The user logged out");
//     },
//     logBlogs: function(){
//         console.log('The user wrote folowing blogs: ')
//         this.blogs.forEach(blog => {
//             console.log(blog.title);
//         })
//     },
//     // we can use shorthand method  to declare a method and  it works the same 
//     // logBlogs(){
//     //     console.log('The user wrote folowing blogs: ')
//     //     this.blogs.forEach(blog => {
//     //         console.log(blog);
//     //     })
//     // }

// };
// console.log(user); 

// console.log(user.name);

// user.age = 20;
// console.log(user.age);

// console.log(user['location']);
// user['name'] = 'vanisha';
// console.log(user['name']);

// console.log(typeof user);

// user.login();
// user.logout();
// user.logBlogs();
// console.log(this);

// Math objects

console.log(Math);
console.log(Math.PI);
console.log(Math.E);
const area = 7.7;
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

// random number
const random = Math.random();
console.log(random);
console.log(Math.round(random*100));