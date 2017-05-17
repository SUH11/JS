/*
	作用：通过类名获取一组元素
	参数：父元素，类名
	返回值：数组
*/
function getElementsByClassName( oParent, aClass){
	var iTag = oParent.getElementsByTagName('*');	
	var arr = [];
	
	for ( var i = 0; i < iTag.length; i ++ ) {
		if ( iTag[i].className ) {
			var arrClassName = iTag[i].className.split(/\s+/);

			for ( var j = 0; j < arrClassName.length; j ++ ) {
				if ( arrClassName[j] == aClass ) {
					arr.push( iTag[i] );
					break;
				}
			}

		}
	}
	return arr;
}