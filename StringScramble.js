function StringScramble(str1,str2) { 

    // Loop through each character in str2
      for (let i = 0; i < str2.length; i++) {
        // Get the current character in str2
        let char = str2[i];
        // Find the index of the character in str1
        let index = str1.indexOf(char);
        // If the character is not found in str1, return false
        if (index === -1) {
          return false;
        }
        // Remove the character from str1
        str1 = str1.substring(0, index) + str1.substring(index + 1);
      }
      // All characters in str2 were found in str1, return true
      return true;
    }
       
    // keep this function call here 
    console.log(StringScramble(readline()));