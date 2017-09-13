/*
  数组去重的两种方法
*/
Array.prototype.unique = function() {
  var result = [];
  var hash = {};
  var len = this.length;
  for ( var i = 0; i < len; i ++ ) {
    if ( !hash.hasOwnProperty( '_' + arr[i] ) ) {
      hash[ '_' + arr[i] ] = 1;
      result.push( this[i] );
    }
  }
  return result;
};

function unique( arr ) {
  var result = [ arr[0] ];
  var len = arr.length;
  for ( var i = 1; i < len; i ++ ) {
    var bool = false;
    for ( var j = 0; j < result.length; j ++ ) {
      if ( arr[i] === result[j] ) {
        bool = true;
        break;
      }
    }
    if ( !bool ) {
      result.push( arr[i] );
    }
  }
}
