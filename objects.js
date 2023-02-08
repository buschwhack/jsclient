

let toy = { name: "snot", toy_type: "puppet", colour: "pink and white" };

console.log( toy.name );
console.log( toy.colour ); 

console.table(toy);

toy.favourite = false;
console.table(toy);

if(toy.favourite){
    console.log( toy.name + " is your favourite toy.");
}else{
    console.log("Not your favourite toy");
}

toy.type = "teddy bear";
console.table(toy);

let pens = [{ pen_type: "fountain", ink_colour: "black", cost: 10.99 },
            { pen_type: "ball point", ink_colour: "blue", cost: 2.99 },
            { pen_type: "gel", ink_colour: "red", cost: 5.99 },
            { pen_type: "pencil", ink_colour: "black", cost: 1.99 },
            ];
            
console.table(pens);

for (data in pens){
    console.log( "Pen type - " + pens[data]['pen_type']);
}


pens.forEach( (mypen) =>{
    console.log(`Customer basket: ${mypen["pen_type"]} pen. £${mypen["cost"]}`);
});

