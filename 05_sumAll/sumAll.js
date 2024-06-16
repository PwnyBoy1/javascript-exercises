const sumAll = function(min, max) {
    arr = [];
    sum = 0;
    if (!Number.isInteger(min) ||!Number.isInteger(max) ) return "ERROR";
    if( min < 0 || max < 0) return "ERROR";
    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
      }
    for (let i = min; max >= i; i++){
        arr.push(i);
    }
    arr.forEach( x =>{sum += x} );
return sum;
};

// Do not edit below this line
module.exports = sumAll;
