///let not use in  class only in method,function
// inside class cal method outside function key word
class Classname{
    //acess specifier public,protected privit
public a:number=1;
private b:string="hybrid"
protected c:boolean=true;
//by defult is their constructor
constructor(){}

// public add(){
//     private x:number=1;


// }
//mrthod 
display(){
    console.log("hello");
}
}
//object let
let exampleObj =new Classname();
//accessing variable outside the class
console.log(exampleObj.a)
//private ==error console.log(exampleObj.b)
//protected==error console.log(exampleObj.c)
