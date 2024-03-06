/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // since it is mentioned above its best to convert the strings to either upper case or lower case
    string = str.toLowerCase();
  // assuming count intially as 0
    let count = 0;
    for(let i=0; i< string.length; i++){
      // vowels = 'a', 'e', 'i', 'o', 'u' 
      // if element is equal to vowel then count is incremented by 1
      if(string[i] == 'a'  || string[i] == 'e'  || string[i] == 'i'  || string[i] == 'o'  || string[i] == 'u'){
        count = count + 1;
      }
    }
    return count;
}

module.exports = countVowels;
