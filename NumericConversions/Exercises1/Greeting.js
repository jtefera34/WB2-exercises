"use strict";

var hour = 45;
var greeting;

overtime = (regularhours * payrate) + (((hoursworked - regularhours) * payrate) * 1.5)


if (hour <= 10){
  greeting = "Good Morning";
}
else if (hour >= 17){
  greeting = "Good Evening";
}

else if (hour >= 10 && 10 <= 16.59){
  greeting = "Good day";
}


 console.log(greeting)