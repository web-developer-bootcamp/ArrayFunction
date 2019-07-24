function printReverse(array) {
    for (var i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}

function isUniform(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[0] !== array[i]) {
            return false;
        }
    }
    return true;
}

function sumArray(array) {
    var result = 0;
    array.forEach(function (item) {
        result = result + item;
    });
    return result;
}

function MAX(array) {
    var max = array[0]
    for (var i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    return max;
}


console.log("REVERSE");
console.log("[2,3,4,5]");
printReverse([2, 3, 4, 5]);
console.log("-------------");

console.log("UNIFORM");
console.log("[1,1,1,1] = " + isUniform([1, 1, 1, 1]));
console.log("[1,11,321,1] = " + isUniform([1, 11, 321, 1]));
console.log("-------------");

console.log("SUM ARRAY");
console.log("[1, 2, 6] = " + sumArray([1, 2, 6]));
console.log("[21, 22, 16] = " + sumArray([21, 22, 16]));
console.log("-------------");

console.log("MAX");
console.log("Value = " + MAX([123, 1332, 2113]));
console.log("-------------");