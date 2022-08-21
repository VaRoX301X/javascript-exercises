const ftoc = function(fah) {
  let temp = (fah - 32) * (5/9);
  return parseFloat(temp.toFixed(1));
};

const ctof = function(cel) {
  let temp = (cel*(9/5)) + 32;
  return parseFloat(temp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
