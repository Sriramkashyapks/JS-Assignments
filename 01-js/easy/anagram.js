/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2){

  // converting all the letters of str1 and str2 to lower case
  const lowerStr1 = str1.toLowerCase();
  const lowerStr2 = str2.toLowerCase();

  //checking that if length of lowerStr1 = lowerStr2
  if(lowerStr1.length != lowerStr2.length){
      return false;
  }

  // by using split sort and join methord we can easily comapre each letters in word/Phrase
  const finalString1 = lowerStr1.split('').sort().join('');
  const finalString2 = lowerStr2.split('').sort().join('');
  
  return finalString1 == finalString2;

}

module.exports = isAnagram;
