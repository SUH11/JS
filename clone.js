/*
  对象的深度克隆（递归）
*/
function clone( obj ) {
  var buf;
  if ( obj instanceof Array ) {
    buf = [];
    var i = obj.length;
    while( i ) {
      buf[i] = clone( obj[i] );
    }
    return buf;
  } else if ( obj instanceof Object ) {
    buf = {};
    for ( var attr in obj ) {
      buf[attr] = clone( obj[attr] );
    }
    return buf;
  }
  return obj;
}
