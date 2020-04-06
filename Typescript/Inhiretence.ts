class Parent{
private a:number=1;
private b:number=2;
//
private var1:string="Hybrid"
public  var3:string="Andro"
protected var2:string="IOS"
public add(){
console.log(this.a+this.b)
}
}

class Child extends Parent{

    public show(){
        console.log(this.var2) 
        console.log(this.var3)

    }
    public display(){
console.log("Hello")
    }
}
let obChild = new Child();
obChild.display();
obChild.add();