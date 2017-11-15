
function forLoop(array) {
  for ( let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push( "I am 1 strange loop." );
    } else {
      array.push( `I am ${i} strange loops.` );
    }
  }
  return array;
}

function whileLoop(n) {
  let num = Math.floor(Math.random() * 100)
    while ( num > 0 ) {
    console.log(num);
  }
    return 'done';
}
