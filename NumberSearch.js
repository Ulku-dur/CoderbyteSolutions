function NumberSearch(str) { 

    // Initialize variables for total sum and letter count
      var total = 0;
      var letterCount = 0;
      
      // Loop through each character in the input string
      for (var i = 0; i < str.length; i++) {
        var char = str.charAt(i);
        
        // If the character is a number, add it to the total
        if (!isNaN(char) && char !== " ") {   // Exclude spaces from the sum
          total += parseInt(char);
        }
        
        // If the character is a letter, increment the letter count
        if (/[a-zA-Z]/.test(char)) {
          letterCount++;
        }
      }
      
      // Calculate the average by dividing the total by the letter count
      var avg = total / letterCount;
      
      // Round the average to the nearest integer and return it
      return Math.round(avg);
    
    
    }
       
    // keep this function call here 
    console.log(NumberSearch(readline()));