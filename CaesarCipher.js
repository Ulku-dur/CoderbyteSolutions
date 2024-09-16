// Caesar Cipher function that takes in a string and a number as parameters
function CaesarCipher(str,num) {
    // Splitting the string into an array of characters and mapping over each character
    str = str.split('').map(function(s){
      // Converting the character to its ASCII code
      s = s.charCodeAt();
      // Checking if the character is an alphabet
      if ((s > 64 && s < 91) || (s > 96 && s < 123)) {
        // Adding the shift number to the ASCII code
        s = s+num;
        // Checking if the ASCII code is outside the range of alphabets
        if ((s > 90 && s < 97) || s > 122) {
          // If it is, wrap around the alphabets by subtracting 26
          s -= 26
        }
      }
      // Converting the ASCII code back to its character form
      return String.fromCharCode(s)
    })
    // Joining the array of characters back to form a string
    return str.join('')
  }
     
  // keep this function call here 
  console.log(CaesarCipher(readline()));