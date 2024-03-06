function anagram(str1, str2){

    const lowerStr1 = str1.toLowerCase();
    const lowerStr2 = str2.toLowerCase();
    if(lowerStr1.length != lowerStr2.length){
        return false;
    }

    const finalString1 = lowerStr1.split('').sort().join('');
    const finalString2 = lowerStr2.split('').sort().join('');
    
    finalString1 == finalString2;

}

module.exports = isAnagram