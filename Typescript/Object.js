var userData = ["Ahmad", "Muscat", "9399399"];
// index0     index1  index2
// ["Ahmad","Muscat","9399399"]
//JSON == to define Obj
//  JSON Syntax
// let variable={key:value};
var sampleObj = { "name": "Ahmad", "location": "Muscat", "phone": "9399399" };
//     name              loc              phone
//{"name":"Ahmad","location":"Muscat","phone":"9399399"};
console.log(sampleObj.name);
console.log(sampleObj.location);
console.log(sampleObj.phone);
//multiple users deteail
var userArray = [{ "name": "Ahmad", "location": "Muscat", "phone": "9399399" },
    { "name": "Mohammed", "location": "Dophar", "phone": "999999999" }
];
for (var i = 0; i < userArray.length; i++) {
    console.log(userArray[i]);
    console.log(userArray[i].name);
    console.log(userArray[i].location);
    console.log(userArray[i].phone);
}
var productArray = [
    {
        "name": "google pixel",
        "cost": "400 OMR",
        "models": ["pixel 4", "pixel3"],
        "comments": [{ "user": "User1" }]
    },
    {
        "name": "iPhone",
        "cost": "400 OMR",
        "models": ["iPhone 4", "iPhoneX"],
        "comments": [{ "user": "User2" }]
    }
];
for (var i = 0; i < productArray.length; i++) {
    // console.log(productArray[i]);
    console.log(productArray[i].name);
    console.log(productArray[i].cost);
    // console.log(userArray[i].models[0]);
    var modelsArray = productArray[i].models;
    for (var j = 0; modelsArray[j]; j++) {
        console.log(modelsArray[j]);
    }
    var commentsArray = productArray[i].comments;
    for (var j = 0; commentsArray[j]; j++) {
        console.log(commentsArray[j]);
    }
}
