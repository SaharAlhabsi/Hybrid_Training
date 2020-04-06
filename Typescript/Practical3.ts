// 1.Create a class named 'Student' with String variable 'name' and 
// integer variable 'roll_no'. Assign the value of roll_no as '2' and 
// that of name as "John" by creating an object of the class Student.
class Student{
 name:string
 roll_no:number
constructor(n:string,r:number){
this.name=n;
this.roll_no=r;
console.log(n +"  " +r)
}
}
let obj=new Student("John",2)

// 2.Write a program to print the area and perimeter of a triangle
//  having sides of 3, 4 and 5 units by creating a class named 'Triangle' 
//  without any parameter in its constructor.

class Triangle{
    side1:number=3
    side2:number=4
    side3:number=5

    constructor(){
       let p:number=(this.side1+this.side2+this.side3)/2;
       let a = Math.sqrt(p*(p-this.side1)*(p-this.side2)*(p-this.side3));
       console.log("parameter are:  "+this.side1+" ,"+this.side2+" ,"+this.side3);
       console.log("Area is:  "+a);
    }
}
let obj2=new Triangle();

// 3.Print the average of three numbers entered by user by 
// creating a class named 'Average' having a method to calculate and print the average.
class Average{
    a:number
    b:number
    c:number
    // constructor(){
        
    //     this.average(this.a,this.b,this.c);
    // }
average(a,b,c){
    let sum=(a+b+c)
    let avg=sum /3
    console.log(avg)
}
}
let obj3=new Average();
obj3.average(10,20,30);

// 4.Display data from the array of object

let sampleArray:any=[
     {        
        "name":"User1",
        "comments":["comment1","comment2","comment3"]  
      },    
      {        
        "name":"User2",
        "comments":["comment4","comment5"]    
    },    {        
        "name":"User3",
        "comments":["comment6"]    }];

        for(let i=0;i<sampleArray.length;i++){
            console.log(sampleArray[i].name);
            let commentsArray:any[]=sampleArray[i].comments;
            for(let j=0;commentsArray[j];j++){
                console.log(commentsArray[j]);}
        
        }        
        
        
// 5.Display Data from Array of Objects

let tempArray:any[]=[
        {        
            "name":"Google Pixel",
            "cost":"400 OMR",
            "comments":[{"user":"User1", "desc":"Sample Description1" }]    
        },    
        {        
            "name":"iPhone",
            "cost":"500 OMR",
            "comments":[
                       { "user":"User1", "desc":"Sample Description1"},
                        {"user":"User2", "desc":"Sample Description2"}
                    ]   
                     }
                    ];
                    for(let i=0;i<tempArray.length;i++){
                        console.log(tempArray[i].name);
                        console.log(tempArray[i].cost);
                        let commentsArray:any[]=tempArray[i].comments;
                        for(let j=0;commentsArray[j];j++){
                            console.log(commentsArray[j].user);
                            console.log(commentsArray[j].desc);
                        
                        }
                        }
                    