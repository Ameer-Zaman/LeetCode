/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanLetters = ["I", "V", "X", "L", "C", "D", "M"];
  const romanNumbers = [1, 5, 10, 50, 100, 500, 1000];
  const length = s.length;
  let indexs;
  let result = 0;

  for (let i = 0; i < length; i++) {
    indexs = romanLetters.indexOf(s[i]);
    if (romanLetters.includes(s[i])) {
      if (romanNumbers[indexs] < romanNumbers[romanLetters.indexOf(s[i + 1])]) {
        result = result - romanNumbers[indexs];
      } else {
        result = result + romanNumbers[indexs];
      }
    }
  }

  return result;
};

console.log(romanToInt("III"));
