/*
	作用：绑定事件的兼容性处理
	参数：对象，事件名称，函数
	返回值：无（默认是undefined）
*/
function bind( obj, name, fn ) {
	if ( obj.addEventListener ) {
		obj.addEventListener( name, fn, false );
	} else {
		obj.attachEvent( 'on'+ name, fn );
	}
}
