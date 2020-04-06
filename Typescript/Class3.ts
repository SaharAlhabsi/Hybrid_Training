class Example5{
    //constructor with parameter
    //styl1
  constructor(message){
    console.log(message)   
  }
  //style2
    public display(message){
        console.log(message)   
    }
}
let ObjEx5=new Example5("Hello");
//reuesable method
 ObjEx5.display("Bye");
