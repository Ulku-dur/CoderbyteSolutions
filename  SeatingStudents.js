function SeatingStudents(arr) {
    const k = arr[0];
    const occupied = new Set(arr.slice(1));
  
    let count = 0;
    for (let i = 1; i <= k; i++) {
      if (!occupied.has(i)) {
        // Check to the right
        if (i % 2 === 1 && !occupied.has(i + 1) && i + 1 <= k) {
          count++;
        }
        // Check below
        if (i < k - 1 && !occupied.has(i + 2)) {
          count++;
        }
      }
    }
  
    return count;
  }
     
  // keep this function call here 
  console.log(SeatingStudents(readline()));