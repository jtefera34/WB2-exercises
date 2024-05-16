"use strict";

var payrate = 10;
var regularhours = 40;
var hoursworked = 45;
var Grosspay;
var annual;
var stat = "single";
var tax;
var overtime;
var net;


Grosspay = (payrate * hoursworked);
annual = Grosspay * 52;
overtime = (regularhours * payrate) + (((hoursworked - regularhours) * payrate) * 1.5);
net = overtime - tax;

if (annual < 12000 && stat == "single"){
  tax = overtime * 0.05;
}

else if (annual >= 12000 && 12000<=24999 && stat == "single"){
  tax = overtime * 0.1;
}
else if (annual >= 25000 && 25000<=74999 && stat == "single"){
  tax = overtime * 0.15;
}
else if (annual >= 75000 && stat == "single"){
  tax = overtime * 0.2;
}

else if  (annual < 12000 && stat == "joint"){
  tax = overtime;
}
else if (annual >= 12000 && 12000<=24999 && stat == "joint"){
  tax = overtimevertime * 0.6;
}
else if (annual >= 25000 && 25000<=74999 && stat == "joint"){
  tax = overtime * 0.11;
}
else if (annual >= 75000 && stat == "joint"){
  tax = overtime * 0.2;
}

net = overtime - tax;


console.log("The annual pay is = " + annual) ;
console .log("The WeeklyGross with out overtime pay is = " + Grosspay);
console.log("The overtime is = " + overtime);
console.log("The Tax cut is = " + tax);
console.log("The netincome is = " + net);



