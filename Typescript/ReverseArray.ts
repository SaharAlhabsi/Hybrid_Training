let newArray:string[]=["hybird","android","ios"];
let reverseArray:string[]=revArrayFun(newArray);
console.log(reverseArray);
//newArray.reverse();
function revArrayFun(recArray:string[]){
    let tempArray:string[]=[];
    let lastIndex=recArray.length-1;
for(let i=lastIndex;i>=0;i--){
tempArray[lastIndex-i]=recArray[i];
}
return tempArray;
}
//console.log(revArrayFun(newArray));

// recArray=["1","2","3"];
// tempArray="";
// lastindex=3-1=2;  >>index num
//i=2 2>=0 true tempArray[2-i] tempArray[2-2] tempArray[0]=recArray[0] temArray[0]=ios

// i--=> i>=0 true tempArray[2-1] temArray[1]=recArray[1] tempArray[1]="android"