// 1.Create a class named 'Student' with String variable 'name' and 
// integer variable 'roll_no'. Assign the value of roll_no as '2' and 
// that of name as "John" by creating an object of the class Student.
var Student = /** @class */ (function () {
    function Student(n, r) {
        this.name = n;
        this.roll_no = r;
        console.log(n + "  " + r);
    }
    return Student;
}());
var obj = new Student("John", 2);
// 2.Write a program to print the area and perimeter of a triangle
//  having sides of 3, 4 and 5 units by creating a class named 'Triangle' 
//  without any parameter in its constructor.
var Triangle = /** @class */ (function () {
    function Triangle() {
        this.side1 = 3;
        this.side2 = 4;
        this.side3 = 5;
        var p = (this.side1 + this.side2 + this.side3) / 2;
        var a = Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3));
        console.log("parameter are:  " + this.side1 + " ," + this.side2 + " ," + this.side3);
        console.log("Area is:  " + a);
    }
    return Triangle;
}());
var obj2 = new Triangle();
// 3.Print the average of three numbers entered by user by 
// creating a class named 'Average' having a method to calculate and print the average.
var Average = /** @class */ (function () {
    function Average() {
    }
    // constructor(){
    //     this.average(this.a,this.b,this.c);
    // }
    Average.prototype.average = function (a, b, c) {
        var sum = (a + b + c);
        var avg = sum / 3;
        console.log(avg);
    };
    return Average;
}());
var obj3 = new Average();
obj3.average(10, 20, 30);
// 4.Display data from the array of object
var sampleArray = [
    {
        "name": "User1",
        "comments": ["comment1", "comment2", "comment3"]
    },
    {
        "name": "User2",
        "comments": ["comment4", "comment5"]
    }, {
        "name": "User3",
        "comments": ["comment6"]
    }
];
for (var i = 0; i < sampleArray.length; i++) {
    console.log(sampleArray[i].name);
    var commentsArray = sampleArray[i].comments;
    for (var j = 0; commentsArray[j]; j++) {
        console.log(commentsArray[j]);
    }
}
// 5.Display Data from Array of Objects
var tempArray = [
    {
        "name": "Google Pixel",
        "cost": "400 OMR",
        "comments": [{ "user": "User1", "desc": "Sample Description1" }]
    },
    {
        "name": "iPhone",
        "cost": "500 OMR",
        "comments": [
            { "user": "User1", "desc": "Sample Description1" },
            { "user": "User2", "desc": "Sample Description2" }
        ]
    }
];
for (var i = 0; i < tempArray.length; i++) {
    console.log(tempArray[i].name);
    console.log(tempArray[i].cost);
    var commentsArray = tempArray[i].comments;
    for (var j = 0; commentsArray[j]; j++) {
        console.log(commentsArray[j].user);
        console.log(commentsArray[j].desc);
    }
}
