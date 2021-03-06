// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

const cache = {};

function fib ( n )
{
  //Solution #1
  // let counter = 0;
  // const fibSe = [];
  // for ( let i = 0; i <= n; i++ )
  // {
  //   fibSe.push( counter );
  //   if ( counter === 0 )
  //   {
  //     counter++;
  //   }
  //   else
  //   {
  //     counter += fibSe[ i - 1 ];
  //   }
  // }

  // return fibSe[ n ];

  //Solution #2

  // const result = [ 0, 1 ];

  // for ( let i = 2; i <= n; i++ )
  // {
  //   const a = result[ i - 1 ];
  //   const b = result[ i - 2 ];

  //   result.push( a + b );
  // }

  // return result[ result.length - 1 ];

  //Solution #3 Slow Recurssion
  // if ( n < 2 )
  // {
    // return n;
  // }
  // return fib( n - 1 ) + fib( n - 2 ); 

  //Solution #4 Memoization

  if ( cache[ n ] )
  {
    return cache[ n ];
  }
  else if ( n < 2 )
  {
     return n;
  }
  else
  {
    const result = fib( n - 1 ) + fib( n - 2 );
    cache[ n ] = result;
    return result;
  }
     
}

module.exports = fib;
