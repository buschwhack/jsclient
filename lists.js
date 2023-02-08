
let workweek = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"];
//console.log(workweek[4]);

for (day in workweek){
    console.log( "Day - " + workweek[day] );
}

for (let count = 0; count < workweek.length; count++) {
    console.log( count+1 + " Day - " + workweek[count] );
}

let txt = "My work day - ";
workweek.forEach((data) => {
    console.log( txt + " - " + data );
});

workweek[4] = 'SATURDAY'; 
workweek.push('SUNDAY'); 

let workcount = workweek.length;

console.log("You work "+ workcount + " days a week.");
for (item in workweek) {
    console.log(" - - " + workweek[item] );
}

/*
let getweek = document.getElementById("week");
let markup="";
for (item in workweek) {
    markup += "<li>"+workweek[item]+"</li>";
}
getweek.innerHTML=markup;
*/

let getweek = document.getElementById("weekt");
let markup="";
for (item in workweek) {
    markup += "<tr><td>"+workweek[item]+"</td><td><button>start time</button></td></tr>";
}
getweek.innerHTML=markup;
