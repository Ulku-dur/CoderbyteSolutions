function FibonacciChecker(num) {
    // Initialize an array with the first value of the Fibonacci sequence
    var prev = [0]
    
    // Loop through each number in the sequence up to and including the input number
    for (i = 1; i < num+1; i) {
      // Calculate the next number in the sequence by adding the previous two
      var check = i + prev[0]
      
      // If the calculated number is equal to the input number, return "yes"
      if (check === num) {
        return 'yes'
      }
      
      // Add the current number to the beginning of the array to keep track of the previous two numbers
      prev.unshift(i)
      
      // Update the current number to be the next number in the sequence
      i = check
    }
    
    // If the input number is not in the Fibonacci sequence, return "no"
    return 'no' 
  }
     
  // keep this function call here 
  console.log(FibonacciChecker(readline()));