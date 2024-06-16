const convertToCelsius = function(temp) {
  temp = ((temp - 32) * (5/9))
    round = Math.round(temp*10)/10;
    return round;
};



const convertToFahrenheit = function(temp) {
    temp = (temp * (9/5)+32)
    round = Math.round(temp*10)/10;
    return round;
    
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
