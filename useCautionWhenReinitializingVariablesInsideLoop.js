//Debugging: Use Caution When Reinitializing Variables Inside a Loop

/*The following function is supposed to create a two-dimensional array with m rows and n columns of zeroes. Unfortunately, it's not producing the expected output because the row variable isn't being reinitialized (set back to an empty array) in the outer loop. Fix the code so it returns a correct 3x2 array of zeroes, which looks like [[0, 0], [0, 0], [0, 0]].*/

function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    //let row = []; row was declared here initially
    for (let i = 0; i < m; i++) {
      let row = [];    /* row has been declared inside the outer loop. 
       So, during each iteration of the outer loop, a new row will be initialized, which allows the desired matrix.*/
      
      for (let j = 0; j < n; j++) {
        
        // Pushes n zeroes into the current row to create the columns
        row.push(0);
      }
      // Pushes the current row, which now has n zeroes in it, to the array
      newArray.push(row);
    }
    return newArray;
  }
  
  let matrix = zeroArray(3, 2);
  console.log(matrix);
  