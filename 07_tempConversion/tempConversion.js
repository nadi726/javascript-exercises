const convertToCelsius = function(f) {
  let degrees = (f - 32) * (5 / 9)
  return roundTo(degrees, 1)
};

const convertToFahrenheit = function(c) {
  let degrees = c * (9 / 5) + 32;
  return roundTo(degrees, 1)
};

function roundTo(num, decimals) {
  let powers = 10 ** decimals
  return Math.round(num * powers) / powers;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
