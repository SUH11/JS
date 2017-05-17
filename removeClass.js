/*
	作用：移除某个对象的类名，只能移除单个类名
	参数：对象，类名
	返回值：无返回值（默认是undefined）
*/
function removeClass( obj, aClass ) {
	if ( obj.className ) {
		obj.arrClassName = obj.className.split(/\s+/);

		for ( var i = 0; i < obj.arrClassName.length; i ++ ) {
			if ( obj.arrClassName[i] == aClass ) {
				obj.arrClassName.splice(i,1)
				i--;
			}
		}
		if ( obj.arrClassName.length > 0 ) {
			obj.className = obj.arrClassName.join(' ');
		} else {
			obj.className = '';
		}
	}
}