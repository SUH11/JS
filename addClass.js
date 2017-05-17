/*
	作用：为某个对象添加类名，只能添加单个类名
	参数：对象，类名
	返回值：无返回值（默认是undefined）
*/
function addClass( obj, aClass ) {
	if ( obj.className ) {
		var arrClassName = obj.className.split(/\s+/);
		var flag = false;

		for ( var i = 0; i < arrClassName.length; i ++ ) {
			if ( arrClassName[i] == aClass ) {
				flag = true;
				break;
			}
		}
		if ( flag ) {
			return;
		}
		obj.className = obj.className + ' ' + aClass;

	} else {
		obj.className = aClass;
	}
}