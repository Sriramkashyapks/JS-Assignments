/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Convert the string to lowercase to make the comparison case-insensitive
  str = str.toLowerCase();

  // Initialize pointers for the start and end of the string
  let left = 0;
  let right = str.length - 1;

  // Continue until the pointers meet in the middle
  while (left < right) {
      // Ignore non-alphanumeric characters from the left
      while (left < right && !isAlphaNumeric(str[left])) {
          left++;
      }
      // Ignore non-alphanumeric characters from the right
      while (left < right && !isAlphaNumeric(str[right])) {
          right--;
      }
      // Compare characters at left and right pointers
      if (str[left] !== str[right]) {
          return false; // If characters don't match, it's not a palindrome
      }
      // Move pointers towards the middle
      left++;
      right--;
  }

  return true; // If no mismatches found, it's a palindrome
}

// Helper function to check if a character is alphanumeric
function isAlphaNumeric(char) {
  return /[a-z0-9]/.test(char);
}

module.exports = isPalindrome;
