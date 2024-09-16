function SwapII(str) { 

    // Swap the case of each character
      str = str.replace(/([a-z])|([A-Z])/g, function(match, p1, p2) {
        if (p1) {
          return p1.toUpperCase();
        } else {
          return p2.toLowerCase();
        }
      });
    
      // Look for numbers that are next to letters
      str = str.replace(/\d+[a-zA-Z]+\d+/g, function(match) {
        // Swap the positions of the two numbers
        var firstNum = match.match(/\d+/)[0];
        var secondNum = match.match(/\d+$/)[0];
        var letters = match.match(/[a-zA-Z]+/)[0];
        return secondNum + letters + firstNum;
      });
    
    return str;
    
    }
       
    // keep this function call here 
    console.log(SwapII(readline()));