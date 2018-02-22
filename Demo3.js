console.log(6 === 4 + 2);

function add(x,y) {
return x + y;
};

function subtract(x,y) {
return y - x;
}

function multiply(x,y) {
return x * y;
}

function divide(x,y) {
return x / y;
}

function assert(expected, actual, message) {
    if (expected === actual) {
        return "True";
    } else {
        return (message);
    }
};

function asserttwo(expected, actual, message) {
    return (expected === actual) ? "True" : message;
};


console.log(6 === add(2,4));

console.log(2 === subtract(3,5));

console.log(9 === multiply(3,3));

console.log(3 === divide(9,3));

console.log(assert(7, add(2,4),"Check the add function"));

console.log(asserttwo(7, add(2,4),"Check the add function"));
