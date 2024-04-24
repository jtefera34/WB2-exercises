"use strict";

var payrate = 10;
var hoursworked = 45;
var Grosspay;
var annual;
var stat="single";
var tax;

Grosspay = payrate * hoursworked
annual = tax * 52

if (Grosspay < 12000 && stat == "single"){
  tax = Grosspay * 0.05
}
else if  (Grosspay < 12000 && stat == "single"){
  tax = Grosspay * 0.05
}
else if (Grosspay >= 12000 && 12000<=24999 && stat == "single"){
  tax = Grosspay * 0.1
}
else if (Grosspay >= 25000 && 25000<=74999 && stat == "single"){
  tax = Grosspay * 0.15
}
else if (Grosspay >= 75000 && stat == "single"){
  tax = Grosspay * 0.2
}

else if  (Grosspay < 12000 && stat == "joint"){
  tax = Grosspay
}
else if (Grosspay >= 12000 && 12000<=24999 && stat == "joint"){
  tax = Grosspay * 0.6
}
else if (Grosspay >= 25000 && 25000<=74999 && stat == "joint"){
  tax = Grosspay * 0.11
}
else if (Grosspay >= 75000 && stat == "joint"){
  tax = Grosspay * 0.2
}
console .log(annual)