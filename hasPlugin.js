/*
  检测是否存在某个插件（IE无效）
*/
function hasPlugin(name) {
  name = name.toLowerCase();
  for ( var i = 0; i < navigator.plugins.length; i ++ ) {
    if ( navigator.plugins[i].name.toLowerCase().indexOf(name) > -1 ) {
      return true;
    }
  }
  return false;
}
// test
console.log( hasPlugin('flash') );
