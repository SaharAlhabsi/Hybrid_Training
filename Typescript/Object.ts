
let userData:any[]=["Ahmad","Muscat","9399399"];
// index0     index1  index2
// ["Ahmad","Muscat","9399399"]
//JSON == to define Obj
//  JSON Syntax
// let variable={key:value};

let sampleObj={"name":"Ahmad","location":"Muscat","phone":"9399399"};
//     name              loc              phone
//{"name":"Ahmad","location":"Muscat","phone":"9399399"};

console.log(sampleObj.name);
console.log(sampleObj.location);
console.log(sampleObj.phone);

//multiple users deteail

let userArray:any[]=[{"name":"Ahmad","location":"Muscat","phone":"9399399"},
{"name":"Mohammed","location":"Dophar","phone":"999999999"}
];

for(let i=0;i<userArray.length;i++){
    console.log(userArray[i]);
    console.log(userArray[i].name);
    console.log(userArray[i].location);
    console.log(userArray[i].phone);
}

let productArray:any[]=[
{
    "name":"google pixel",
    "cost":"400 OMR",
   "models":[ "pixel 4","pixel3"],
    "comments":[{"user":"User1"}]

}
,{
    "name":"iPhone",
    "cost":"400 OMR",
    "models":["iPhone 4","iPhoneX" ],
        "comments":[{"user":"User2"}]
}
];
for(let i=0;i<productArray.length;i++){
    // console.log(productArray[i]);
    console.log(productArray[i].name);
    console.log(productArray[i].cost);
    // console.log(userArray[i].models[0]);
    let modelsArray:any[]=productArray[i].models;
    for(let j=0;modelsArray[j];j++){
        console.log(modelsArray[j]);}
        let commentsArray:any[]=productArray[i].comments;
        for(let j=0;commentsArray[j];j++){
            console.log(commentsArray[j]);
    }
    

}