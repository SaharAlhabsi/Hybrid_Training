class Example4{
    //mrthod with parameter and return 
    //let==create variable inside method call let
//rturn outside 
    public add(a,b,c){
        let  d= a+b+c;
        return d;
    }
}
let ObjEx4=new Example4();
//reuesable method
let result = ObjEx4.add(1,2,3);
console.log(result)
let result2 = ObjEx4.add(9,2,3);
console.log(result2)