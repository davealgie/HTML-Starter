
let myNums = [1,2,3];
let myOtherNums = new Array(1,2,3);

console.log(myNums[1]);
myNums[0] = 54;

console.log(`UNSORTED: ${myNums}`);
console.log(`SORTED: ${myNums.sort()}`);

myNums.push("Hello");

let returnedString = myNums.pop();
console.log(returnedString);

delete myNums[2];

console.log(`myNums with element at pos 2 delete: ${myNums.length}`);
console.log(myNums[2]);


console.log("\n- ITERATION:");
for (let index = 0; index <myOtherNums.length; index++){
    const element = myOtherNums[index];
    console.log(element);
}

console.log("\n- FOR OF:")
for (const element of myOtherNums){
    console.log(element);
}

let d =["Hello","Everybody"];
console.log( `${d.length}`);

d.push("yo");
console.log( `${d.length}`);

console.log(d.shift());

for (let i = 0; i < d.length; i++) {
    for (let key in d[i]) {
        console.log(`${key} : ${d[i][key]}`);
    }
}
for (const element of d){
    console.log(element);
}
