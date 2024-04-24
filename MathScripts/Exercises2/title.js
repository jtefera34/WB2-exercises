"use strict";

// sample inputs
var width=13;
var length= 10 ;
var area = length * width

// box = 12 titles
var titles = 1 * 1




// Calculate number of tiles needed without 10% extra
var totaltitles = area/titles
var totalbox = totaltitles / 12


// Calculate number of box needed with 10% extra
var extra = 0.1
var totalamountaddtitlespartial = Math.ceil(totalbox * extra)
// Calculate number of box needed with 10% extra but no partials
var totalamountaddtitles = Math.ceil(totalbox * extra)
var finaltotalboxes  = Math.ceil(totalamountaddtitles + totalbox)
var addtitles = Math.ceil (totaltitles * extra)


// output
console.log(addtitles);
console.log("Total Number of Titles = "  + totaltitles + " " +"Titles");
console.log("Total number of boxes = " + totalbox + " " + "Boxes");
console.log("Additional 10% of for emergance with partial = " + " " + totalamountaddtitlespartial + " " +  "Boxes"); 
console.log("Additional 10% of for emergance = " + totalamountaddtitles + " " +  "Boxes"); 
console.log("Total number of boxes with extra = " + finaltotalboxes + " " + "Boxes");


