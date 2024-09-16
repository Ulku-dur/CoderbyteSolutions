function CheckNums(num1,num2) { 

    if (num2 > num1) {
      return true; 
    } else if (num1 === num2){
      return -1;
    }
    
    //default
    return false;
  
  }
     
  // keep this function call here 
  console.log(CheckNums(readline()));