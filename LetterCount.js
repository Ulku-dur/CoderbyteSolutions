function LetterCount(str) { 

    const words = str.split(' ');
    let maxWord = '';
    let maxCount = 1;
    
    for (let i = 0; i < words.length; i++) {
      const counts = {};
      let count = 0;
      for (let j = 0; j < words[i].length; j++) {
        const char = words[i][j];
        counts[char] = counts[char] ? counts[char] + 1 : 1;
        if (counts[char] > count) {
          count = counts[char];
        }
      }
      if (count > maxCount) {
        maxCount = count;
        maxWord = words[i];
      }
    }
    
    return maxWord || -1;
    }
       
    // keep this function call here 
    console.log(LetterCount(readline()));