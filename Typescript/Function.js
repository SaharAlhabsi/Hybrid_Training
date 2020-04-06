// Named function
var num1 = 1;
var num2 = 2;
var num3 = 3;
//let result1=num1+num2+num3;
//let result11=num1*num2*num3;
function add(x, y, z) {
    console.log(x + y + z);
    console.log(x * y * z);
}
// calling 
add(num1, num2, num3);
// //function no parameters & no return values
// function name(){
// statement
// }
// // calling function
// name()
//Declaration it will call thin print this
function add2() {
    //values are constant -can`t change
    var a = 1;
    var b = 2;
    console.log(a + b);
}
//calling function 
add2();
add2();
//function with parameter with no return 
//b Any
function add3TwoNumber(a, b) {
    console.log(a + b);
}
add3TwoNumber(2, 5);
add3TwoNumber(8, 9);
//function with paameter && return Values
function add3Num(a, b, c) {
    var d = a + b + c;
    return d;
}
var res1 = add3Num(5, 5, 5);
console.log(res1);
add3Num(5, 2, 5);
