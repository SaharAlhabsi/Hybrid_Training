class Example6{
    private var1:number;
    private var2:number;
    private var3:number;
    constructor(a,b,c){
        this.var1=a;
        this.var1=b;
        this.var1=c;
    }
    public add(){
        let res=this.var1+this.var2+this.var3;
        console.log(res);
    }
}
let objEx6=new Example6(2,3,6);
objEx6.add();

