// Named function
let num1:number=1;
let num2:number=2;
let num3:number=3;
//let result1=num1+num2+num3;
//let result11=num1*num2*num3;
function add(x, y,z) {
    console.log( x + y+z);
    console.log( x * y*z);
}
// calling 
add(num1,num2,num3);
// //function no parameters & no return values

// function name(){
// statement
// }

// // calling function
// name()
//Declaration it will call thin print this
function add2(){
    //values are constant -can`t change
    let a:number=1;
    let b:number=2;
    console.log(a+b);
}

//calling function 
add2();
add2();
//function with parameter with no return 
//b Any
function add3TwoNumber(a:number,b){
    console.log(a+b);

}

add3TwoNumber(2,5);
add3TwoNumber(8,9);

//function with paameter && return Values

function add3Num(a,b,c) {
    let d=a+b+c;
    return d;
    // return(a+b+c);
}
let res1=add3Num(5,5,5) ;
console.log(res1);
add3Num(5,2,5) ;