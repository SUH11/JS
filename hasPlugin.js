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

/*
  ie下，使用COM的唯一标志符
*/ 
function hasIEPlugin(name) {
  try {
    new ActiveXObject(name);
    return true;
  } catch (ex) {
    return false;
  }
}
// test COM的flash标志符
console.log(hasIEPlugin( 'ShockwaveFlash.ShockwaveFlash' );
