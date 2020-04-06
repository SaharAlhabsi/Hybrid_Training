let array1:number[]= [1,2,3,4,5];
console.log(array1.length);
console.log(array1[0]);
console.log(array1[1]);
console.log(array1[2]);
let strarray:string[]= ["text1"];
let Anyarray:any[]= ["text1",1,false];
///Styl1
array1.forEach(element => {
    console.log(element);
});
//style2
let sampleArray:string[]=["text1","text2"];
for(let i=0;i<sampleArray.length;i++){
    console.log(sampleArray[i]);
}
