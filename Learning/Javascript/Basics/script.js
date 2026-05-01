let username;
document.getElementById("submit").onclick = function(){
    username = document.getElementById("username").value;
    console.log(username);
    document.getElementById("welcome").textContent =   `Hello ${username}`
}
const pi = 3.14159;
let radius;
let area;
let circumference;
document.getElementById('s').onclick = function(){
    radius = document.getElementById('radius').value;
    circumference =2*pi*radius;
    area = pi*radius**2;
    console.log(circumference);
    console.log(area);
}


