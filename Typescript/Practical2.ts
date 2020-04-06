// Note: Tasks has to be completed with Functions
// 1.Write a logic to delete the last value Array with out using pop() method?
// Example : 
// Input=> let testArray1:string[]=["Ionic","Angular","HTML","CSS"]
// Output=> ["Ionic","Angular","HTML"]
console.log(" Task1: Delete Last Element");
let array:string[] = ["Ionic","Angular","HTML","CSS"]
remove(array)

function remove(array:string[]){
     let newArr = []
  
  for(let i = 0; i < array.length - 1; i++){
    //if(i != array.length){
      newArr[i] = array[i]
    //} 
  }
  return newArr;
  
  }

// // 2.Write a logic to delete the values from middle of array with out using splice() method?
// // Example :
// //  Input=> let testArray1:string[]=["Ionic","Angular","HTML","CSS"]
// // Output=> ["HTML","CSS"]
console.log("Task2:Delete 2 First Element");
let testArray2:string[] =["Ionic","Angular","HTML","CSS"]
remove2Elem(testArray2)
function remove2Elem(testArray2){
    let firstone= []
    let secondone= []
    let total = 0
 
 for(let i = 0; i < testArray2.length ; i++){
   if(i <= 1){
     firstone[i] = testArray2[i]
   }
   if(i > 1 && i < testArray2.length){
     secondone[total] = testArray2[i]
     total ++;

   }
 }
 console.log(secondone)
 
 }


// // 3.Write a logic to add element from first in Array with our using unshift() method?
// // Input=> let testArray1:string[]=["Ionic","Angular"]
// // Output=> ["Cordova","Ionic","Angular"]
// // Java Program to add an element in an Array 
 console.log(" Task3 : Insert  Element");
let testArray3:string[]=["Ionic","Angular"]
let i, pos ; 
let size=testArray3.length;

function add(string){
   let newArr = ["Cordava"]
 for(let i = 0; i < size ; i++){
    newArr[i+1] = testArray3[i]
 }
console.log(newArr)
 
 }
 add(testArray3)



      