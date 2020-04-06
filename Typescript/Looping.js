console.log("Foor Loop");
for (var i = 1; i < 6; i++) {
    console.log(i);
}
console.log("Even");
for (var i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
console.log("While Loop check condition then execute the statement");
var n = 1;
while (n <= 5) {
    console.log(n);
    n++;
}
console.log("Do While Loop check condition then execute the statement");
var n2 = 1;
do {
    console.log(n2);
    n2++;
} while (n <= 5);
