"use strict";

var payrate = 10;
var hoursworked = 45;
var Grosspay;
var annual;
var stat = "single";
var tax;

Grosspay = payrate * hoursworked
annual = Grosspay * 52

if (annual < 12000 && stat == "single"){
  tax = annual * 0.05
}

else if (annual >= 12000 && 12000<=24999 && stat == "single"){
  tax = annual * 0.1
}
else if (annual >= 25000 && 25000<=74999 && stat == "single"){
  tax = annual * 0.15
}
else if (annual >= 75000 && stat == "single"){
  tax = annual * 0.2
}

else if  (annual < 12000 && stat == "joint"){
  tax = annual
}
else if (annual >= 12000 && 12000<=24999 && stat == "joint"){
  tax = annual * 0.6
}
else if (annual >= 25000 && 25000<=74999 && stat == "joint"){
  tax = annual * 0.11
}
else if (annual >= 75000 && stat == "joint"){
  tax = annual * 0.2
}
console.log(annual)
console .log(tax)
