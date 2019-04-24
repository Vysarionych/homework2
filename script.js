'use srtrict';
let money,
    time;

money = prompt("Your budget?");
console.log(money);

time = prompt("Date");
console.log(time);

let appData = {
    budget: money,
    timeData: time,
    expenses:{
        obligExp,
        howMuch
    },
    optionalExpenses:{

    },
    income: null,
    savings: false
};

var obligExp = prompt("Eneter your obligatory expenses");
console.log(obligExp);
var howMuch = prompt("How much?");
console.log(howMuch);

alert("Budget for a day - " + appData.budget/30);