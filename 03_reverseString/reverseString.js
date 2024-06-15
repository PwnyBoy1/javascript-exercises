const reverseString = function(str) {

     let string = str.split("");
     let reversedArray = string.reverse();
     let joinArray = reversedArray.join("");
     return joinArray;
};

// Do not edit below this line
module.exports = reverseString;
