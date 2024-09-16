function BracketMatcher(str) {
    const stack = []; // Create an empty stack to keep track of opening brackets
    for (let i = 0; i < str.length; i++) { // Loop through each character in the input string
      if (str[i] === '(') { // If the character is an opening bracket
        stack.push(str[i]); // Push it onto the stack
      } else if (str[i] === ')') { // If the character is a closing bracket
        if (stack.length === 0) { // If the stack is empty, there is no matching opening bracket
          return 0; // Return 0 to indicate the brackets are not matched
        } else {
          stack.pop(); // Otherwise, pop the top element off the stack (the last opening bracket) and discard it
        }
      }
    }
    return stack.length === 0 ? 1 : 0; // If the stack is empty, all opening brackets have been matched, so return 1; otherwise, return 0
  }
     
  // keep this function call here 
  console.log(BracketMatcher(readline()));