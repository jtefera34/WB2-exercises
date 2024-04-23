"use strict";

// sample inputs
var x1;
var y1;
var x2;
var y2;

x1 = 5
x2 = 2
y1 = 5
y2 = 1

// calculations
var x = Math.pow((x1-x2),2)
var y = Math.pow((y1-y2),2)
var distance = Math.sqrt(x + y)
// output
console.log("The Distance is = " + distance);
