let num1:Array<number>;     // declaration 
let num2:Array<number>=[10,20,30];  //declaration with intialization 
let num3:Array<number>=new Array(); // memory created with empty array
//console.log(num1.length)
console.log(num2.length)
console.log(num3.length)
console.log(num2)
num2.push(40);      // it add at last 
num2.push(50);         // it add at last  
num2.unshift(1);        // it add the element at the begining 
num2.unshift(2);        // it add the element at the begining
console.log(num2)
num2.pop();             // it remove the element from last 
num2.shift();           // it remove the element from begining 
console.log(num2);
let index = num2.findIndex(e=>e==20);
num2.splice(index,1);   // 1st parameter index and 2nd parameter number of 
                        //elements from that index
console.log(num2);

