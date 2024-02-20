function countVowels(str) {
    const regex = /[aeiou]/gi;
    const sum = str.match(regex);
    return sum  ?  sum.length : 0 ;
    
  }
  