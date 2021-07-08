function reverseArray(array){
    var reverseArray = []
    while (i = array.pop()) 
        reverseArray.push(i);
    return reverseArray;
    
}

function reverseArrayInPlace( array ) {
    for( var i = 0; i < Math.floor( array.length/2 ); i++ ) {
      var temp = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = temp;
    }
  }
console.log(reverseArray(["A", "B", "C"]));
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
