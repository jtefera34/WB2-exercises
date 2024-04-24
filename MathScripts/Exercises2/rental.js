"use strict";

// sample inputs
var People;
var vans;
var cost;
People = 38
cost = 250
vans = 15

// calculations
var numbervan = Math.ceil (People/vans);
var costofvans = cost * numbervan;
var costofperperson = Math.ceil(costofvans/People);
var collectedmoney = costofperperson * People
var leftover = collectedmoney - costofvans
// output
console.log("Total number van =" + numbervan);
console.log("Total cost per person =" + costofperperson);
console.log("Total money collected =" + collectedmoney);
console.log("Acutall money value =" + costofvans);
console.log("Money left over from the collect money =" + leftover);

