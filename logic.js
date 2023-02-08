console.log( 45 > 40 );    
console.log( 45 == 44 );  
console.log( 99 != 100 );  
console.log( 99 < 100 );   
console.log( 90 >= 100 );  

let a = 0;
let b = false;

console.log( a == b ); 
console.log( a === b ); 

let curr_yr = new Date().getFullYear();
console.log(curr_yr);

if (curr_yr > 2022) {
    console.log("We are in a year after 2022");
}

let yr = document.getElementById("yr");
yr.innerHTML = curr_yr;

let user_role = "admin";
let user_data;
if (user_role === "member"){
    console.log("User has member rights.");
    user_data = "User has member rights.";
 }else{
    console.log("User is admin, give them ALL access."); 
    user_data = "User is admin, give them ALL access.";
}
let ud = document.getElementById("role");
ud.innerHTML = user_data;

let myage = 17;
let myaccess = (myage > 18) ? true : false;
console.log(myaccess);