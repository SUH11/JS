/*
  类数组转换为数组
*/
function convertToArray(nodes) {
  var array = [];
  try {
    array = Array.prototype.slice.call(nodes, 0);
  } catch(ex) {
    // IE8及以下
    for ( var i = 0, len = nodes.length; i < len; i ++ ) {
      array.push( nodes[i] );
    }
  }
  return array;
}
