
function welcome(data, num){
    console.log("Welcome to my site "+data);
    if (num > 17){
        console.log(data + " is allowed to vote." );
    }else{
        console.log(data + " is NOT allowed to vote." );
    }
}

welcome("James", 16);

function calVAT(cost){
    let newcost = cost * .2;
    return newcost;
}

let costprice = 120;
let newprice = calVAT(costprice);
let total = costprice + newprice;
console.log("£" + total);

var ecalvat = function(para1, para2){
    let vat = para1 * para2;
    let res = Math.floor(vat + para1);
    return res;
};

console.log("New price with VAT added: £" + ecalvat(120, .2));


var acalvat = (d1, d2) => {
    let vat_total = d1 * d2;
    let result = Math.floor(vat_total + d1);
    return result;
}

console.log("New price using arrow function expression £" + acalvat(109, .2));