// Note: Tasks has to be completed with Functions
// 1.Write a logic to delete the last value Array with out using pop() method?
// Example : 
// Input=> let testArray1:string[]=["Ionic","Angular","HTML","CSS"]
// Output=> ["Ionic","Angular","HTML"]
console.log(" Task1: Delete Last Element");
var array = ["Ionic", "Angular", "HTML", "CSS"];
remove(array);
function remove(newArr) {
    newArr = [];
    for (var i_1 = 0; i_1 < array.length - 1; i_1++) {
        if (i_1 != array.length) {
            newArr[i_1] = array[i_1];
        }
    }
    console.log(newArr);
}
// // 2.Write a logic to delete the values from middle of array with out using splice() method?
// // Example :
// //  Input=> let testArray1:string[]=["Ionic","Angular","HTML","CSS"]
// // Output=> ["HTML","CSS"]
console.log("Task2:Delete 2 First Element");
var testArray2 = ["Ionic", "Angular", "HTML", "CSS"];
remove2Elem(testArray2);
function remove2Elem(testArray2) {
    var firstone = [];
    var secondone = [];
    var total = 0;
    for (var i_2 = 0; i_2 < testArray2.length; i_2++) {
        if (i_2 <= 1) {
            firstone[i_2] = testArray2[i_2];
        }
        if (i_2 > 1 && i_2 < testArray2.length) {
            secondone[total] = testArray2[i_2];
            total++;
        }
    }
    console.log(secondone);
}
// // 3.Write a logic to add element from first in Array with our using unshift() method?
// // Input=> let testArray1:string[]=["Ionic","Angular"]
// // Output=> ["Cordova","Ionic","Angular"]
// // Java Program to add an element in an Array 
console.log(" Task3 : Insert  Element");
var testArray3 = ["Ionic", "Angular"];
var i, pos;
var size = testArray3.length;
function add(string) {
    var newArr = ["Cordava"];
    for (var i_3 = 0; i_3 < size; i_3++) {
        newArr[i_3 + 1] = testArray3[i_3];
    }
    console.log(newArr);
}
add(testArray3);
