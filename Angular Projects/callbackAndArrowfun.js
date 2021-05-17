function fullName(fname, callback) {
    return "Welcome " + callback(fname);
}
var maleInfo = function (fname) {
    return "Mr " + fname;
};
var femaleInfo = function (fname) {
    return "Miss " + fname;
};
console.log(fullName("Raj", maleInfo));
console.log(fullName("Seeta", femaleInfo));
console.log(fullName("Ajay", function (fname) {
    return "Mr " + fname;
}));
var num = [10, 20, 30, 40, 50];
//1st option 
var dis = function (n) {
    console.log(n);
};
num.forEach(dis);
//2nd option 
num.forEach(function (n) {
    console.log(n);
});
//3rd arrow function 
num.forEach(function (n) { return console.log(n); });
