// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk ( array, size )
{

  //Solution #1 first thing i came up with, now i'm gonna optimize it

  // const newArr = [];
  // let chunk = [];
  // let i = array.length;
  // array.map( element =>
  // {
  //   chunk.push( element );

  //    if ( chunk.length === size )
  //    {
  //      newArr.push( chunk );
  //      chunk = [];
  //    }
  //    else if (i === 1)
  //    {
  //      newArr.push( chunk );
  //   }
  //   i--; 
  //  } );
  
  // return newArr;

  //Solution #2 
}

module.exports = chunk;
