const array = [5,4,3,2,1];

// INSERTION SORT
function insertionSort(array) {
  for(let index = 0; index < array.length; index++) {
    let storedValue = array[index];
    let sorter = index - 1;
    while (sorter >= 0 && array[sorter] > storedValue) {
      array[sorter + 1] = array[sorter];
      sorter--;
    }
    array[sorter + 1] = storedValue;
  }
  return array;
}



// INSERTION SORT WITH CONSOLE LOGS

function insertionSortWithLogs(array) {

  // Loops through the (unsorted) array
  for(let index = 0; index < array.length; index++) {
  console.log("LOOP "+index);
  console.log("index = " + index);

    let storedValue = array[index];
    console.log("storedValue = " + array[index]);

    let sorter = index - 1;
    console.log("sorter = "+sorter);

    if(sorter < 0 ){
    console.log("sorter is less than zero, will not enter while loop");
    } else {
    console.log("sorter is equal to or greater than zero, entering while loop");
    }

    // while loop runs if sorter is greater than or equal to 0 &&
    // the captured storedValue value is less than the current array value
    while (sorter >= 0 && array[sorter] > storedValue) {
      console.log("");
    	console.log("while loop");

      // captures the value +1 of where it begins and assigns it to its current index
      array[sorter + 1] = array[sorter];
      console.log("array["+(sorter+1)+"] =  " + array[sorter]);
      console.log()

      sorter--;
      console.log("array in while loop " + array);
      console.log("");
    }
    console.log("Exited while loop")
    console.log("current state of the array = "+ array);

    // Pushes the stored value to the index +1 from where it ended the while loop
    //
    array[sorter + 1] = storedValue;
    console.log("array after pushing in the storedValue " + array);
    console.log("");
  }
  return array;
}

console.log(insertionSortWithLogs(array));
