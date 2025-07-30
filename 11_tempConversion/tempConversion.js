const convertToCelsius = function(f) {
  return Number(((f - 32) *5/9).toFixed(1));
};

const convertToFahrenheit = function(c) {
  return Number(((c * 1.8) + 32).toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
