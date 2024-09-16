function RunLength(str) { 

    let result = "";
    let count = 1;
      
      for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) { // If the current character is the same as the next one, increase the count
          count++;
        } else { // If the current character is different from the next one, add the count and the character to the result
          result += count + str[i];
          count = 1; // Reset the count
        }
      }
      
      return result;
    
    }
       
    // keep this function call here 
    console.log(RunLength(readline()));