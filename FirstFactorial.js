function FirstFactorial(num) { 

    if (num === 0 || num === 1) { // Base case: the factorial of 0 and 1 is 1
        return 1;
    } else { // Recursive case: multiply num by the factorial of num - 1
        return num * FirstFactorial(num - 1);
      }
    
    }
       
    // keep this function call here 
    console.log(FirstFactorial(readline()));