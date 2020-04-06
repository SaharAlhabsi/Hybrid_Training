// 1.Print the odd numbers from 1 to 20
// for(let i=1;i<=20;i++){
//     if(i % 2 !=0){
//         console.log(i);
//     }
// }
// 2.Sum of numbers from 1 to 5 => output 1+2+3+4+5=15
// function Sum(a,b,c,d,e){
// let sum=a+b+c+d+e;
// return sum;
// }
//     console.log(Sum(1,2,3,4,5));
// 3. 
// let n:number=1;
// while(n<=5){
//     console.log(n);n++;}
//     let n2:number=1;
//     do{
//         console.log(n2);
//         n2++;
//     }while(n2<=5);
// 4.1
//   12    
//   123    
//   1234
// for(let i=1;i<=5;i++){
//   let holder="";
//     for(let s=1;s<i;s++){
//       holder+=s;
//     }
//     console.log(holder);
// }
//   5.1    
//     22    
//     333
//     4444
for (var i = 1; i <= 4; i++) {
    var rep = "";
    for (var s = 0; s < i; s++) {
        rep += i;
    }
    console.log(rep);
}
