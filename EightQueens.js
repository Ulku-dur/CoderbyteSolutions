function EightQueens(strArr) {
    // Convert the string input to an array of coordinates
    const queens = strArr.map((coord) => {
      const x = parseInt(coord[1]);
      const y = parseInt(coord[3]);
      return { x, y };
    });
  
    // Check if any queens are attacking each other
    for (let i = 0; i < queens.length; i++) {
      for (let j = i + 1; j < queens.length; j++) {
        const q1 = queens[i];
        const q2 = queens[j];
        if (q1.x === q2.x || q1.y === q2.y || Math.abs(q1.x - q2.x) === Math.abs(q1.y - q2.y)) {
          // Queens are attacking each other, return the location of the first queen
          return `(${q1.x},${q1.y})`;
        }
      }
    }
  
    // If all queens are valid, return true
    return true;
  }
     
  // keep this function call here 
  console.log(EightQueens(readline()));