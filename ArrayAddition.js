function ArrayAddition(arr) { 

    // sort the array in ascending order and remove the largest number 
      var target = arr.sort(function(a, b){return a-b}).pop();
    
      // check if any combination of numbers in the array (excluding the largest number) 
      // can be added up to equal the largest number in the array
      return isContains(arr, target);
    
      function isContains(arr, target){
    
      // if the array is empty, check if the target is zero
      if(arr.length === 0){
        return target === 0;
      }
    
      // get the first element in the array and the remaining elements
      var head = arr[0];
      var tail = arr.slice(1);
    
      // check if the target can be reached by subtracting the first element from the target
      // and checking if the remaining elements contain a combination that adds up to the result
      // or check if the remaining elements contain a combination that adds up to the target
      return isContains(tail, target - head) || isContains(tail, target);
    }
    
    }
       
    // keep this function call here 
    console.log(ArrayAddition(readline()));