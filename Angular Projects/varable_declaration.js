var a = 10;
a = 20; // re-initialize 
var a = 30; // re-declaration 
var b = 30;
b = 40;
//let b=50;         // we can't do re-declaration 
for (var i = 0; i < 100; i++) {
}
console.log(i);
for (var j = 0; j < 100; j++) {
}
//console.log(j)                // Error we can't access j
var k = 200;
//k=300;              // we can't change the value 
