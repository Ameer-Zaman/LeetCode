const isPalindrome = function (s) {
  let replace = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    
  let left = 0;
  let right = replace.length - 1;

  while (left < right) {

    if (replace[left] !== replace[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama!"));
