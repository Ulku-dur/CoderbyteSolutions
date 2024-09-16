function SimpleMode(arr) { 

    const count = {};
      const firstOccurrence = {};
      let maxCount = 0;
      let mode = -1;
      for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (num in count) {
          count[num]++;
        } else {
          count[num] = 1;
          firstOccurrence[num] = i;
        }
        if (count[num] > maxCount || (count[num] === maxCount && firstOccurrence[num] < firstOccurrence[mode])) {
          maxCount = count[num];
          mode = num;
        }
      }
      return (maxCount > 1) ? mode : -1;
    
    }
       
    // keep this function call here 
    console.log(SimpleMode(readline()));