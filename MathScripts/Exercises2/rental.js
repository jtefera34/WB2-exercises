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
var costofperperson = costofvans/People;

// output
console.log(numbervan);
console.log(costofperperson);
console.log(costofvans);
