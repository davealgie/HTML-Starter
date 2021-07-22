function when(then) {
    console.log("Outer function");

    console.log("About to call callback");
    then();
}
function doSomething() {console.log("Does something");}
let doSomethingElse = () => {console.log("Does something else")}

when(doSomething);

function multiplyBy2(num) {
    return num * 2;
}

    console.log(apply(multiplyBy2, [1,2,3]));
    console.log(apply(x => x * 2, [1,2,3]));
    console.log(apply(x => x ** 2, [1,2,3]));


function apply(fn, arr) { 
    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i];
        arr[i] = fn(currentElement);

    }
    return arr;
}

function filter(predicateFn, arr) {
    let returnaArr =[];

    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i];

        if (predicateFn(currentElement)) {
            returnaArr.push(currentElement);
        }
    }
    return returnaArr;
}

function isEven(num) {
    if (num % 2 == 0) return true;
    return false;
}
console.log(isEven() [1,2,3,4])
console.log(filter(x => x % 2 == 0, [1,2,3,4]))




const greeting = (name) =>  {

    // Creates an alert(pop-up box) which says hello and appends the value of the variable name
    alert(`Hello ${name}`);
  }

  const processUserInput = (callback) =>  {

    // A simple user input box appears on the browser that take a value and assigns it to name
    let name = prompt('Please enter your name.');

    // Then pass the variable name to the callback function as parameter
    callback(name);
  }
 //Call the function processUserInput() and then pass greeting as a parameter.
processUserInput(greeting);