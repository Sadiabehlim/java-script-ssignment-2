var country = prompt("country", "Pakistan");
console.log(country);
var school = true;
var academy = true;
if (school == false) {
    console.log("studies continue");
}
else if (academy == true) {
    console.log("classes will conduct in academy and studies continue");
}
else {
    console.log("off");
}
var ticket = 30;
var bonuscard = true;
if(ticket == 25) {
    console.log("Allow")
} else {
    if(bonuscard == true) {
        console.log("Allow on bonuscard");
    } else {
        console.log("Not Allowed");
    }
}

var height = 20;
var weight = 10;
if (height == weight) {
    console.log("height is equal to weight");
}
if (height != weight) {
    console.log("height is not equal to weight");
}
if (height < weight) {
    console.log("height is less than weight");
}
if (height > weight) {
    console.log("height is more than weight");
}
var ticket = 18;
var token = true;
if (ticket == 20 || token == true) {
    console.log("Allow Entry");
}
else{
    console.log("No Entry Allowed");
}
var ruppees = 100;
var coupon = true;
if(ruppees == 100 && coupon == true) {
    console.log("winner");
}
else{
    console.log("looser");
}