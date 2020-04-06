var sampleArray = ["Hybrid", "android", "ios"];
for (var i = 0; i < sampleArray.length; i++) {
    console.log(sampleArray[i]);
}
//pop- delete the last value from the array
console.log(sampleArray);
sampleArray.pop();
console.log(sampleArray);
//push-add value from last
var sampleArray2 = ["text1", "text2"];
console.log(sampleArray2);
sampleArray2.push("text3");
console.log(sampleArray2);
//shift -delete first element from array
var sampleArray3 = ["text1", "text2"];
console.log(sampleArray3);
sampleArray3.shift();
console.log(sampleArray3);
//unshift -add first element from array
var sampleArray4 = ["text1", "text2"];
console.log(sampleArray4);
sampleArray4.unshift("newtext");
console.log(sampleArray4);
// 
var sampleArray5 = ["text1", "text2"];
console.log(sampleArray5);
sampleArray5[0] = "ionic";
console.log(sampleArray5);
//remove index inside array 
var sampleArray6 = ["text1", "text2", "text3", "text4"];
console.log(sampleArray6);
// sampleArray6.splice(index,number of value deleted);
sampleArray6.splice(0, 3);
console.log(sampleArray6);
//
var sampleArray7 = ["text1", "text2", "text3", "text4"];
console.log(sampleArray7);
// sampleArray6.splice(index,number of value deleted,Value to be inserted);
sampleArray7.splice(2, 0, "new");
console.log(sampleArray7);
//
var sampleArray8 = ["text1", "text2", "text3", "text4"];
console.log(sampleArray8);
// sampleArray6.splice(index,number of value deleted,Value to be inserted);
sampleArray8.splice(2, 1, "new");
console.log(sampleArray8);
//
var sampleArray9 = ["text1", "text2", "text3", "text4"];
console.log(sampleArray9);
// sampleArray6.splice(index,number of value deleted,Value to be inserted);
sampleArray9.splice(1, 3, "newtext1", "newtext2");
console.log(sampleArray9);
