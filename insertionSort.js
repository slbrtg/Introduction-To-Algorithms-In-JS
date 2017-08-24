// INSERTION SORT
var array = [9, 2, 5,7];

function insertionSort(array) {
  for(var i = 0; i < array.length; i++) {
  console.log("i = " + i);

    var temp = array[i];
    console.log("temp1 = " + array[i]);

    var j = i - 1;
    console.log("j = "+j);

    if(j < 0 ){
    console.log("j is less than zero, will not enter while loop");
    } else {
    console.log("j is equal to or greater than zero, entering while loop");
    }
    while (j >= 0 && array[j] > temp) {
    	console.log("begin while loop");

      array[j + 1] = array[j];
      console.log("array["+(j+1)+"] =  " + array[j]);
      console.log()
      j--;
    }
    console.log("array leaves while (loop #"+i+") = "+ array);

    array[j + 1] = temp;
    console.log("array after pushing in temp " + array);
    console.log("");
  }
  return array;
}

console.log(insertionSort(array));
