
/*
	获取样式
	注：
		1.不能获取复合样式 如：background
		2.单一样式不要拿来做判断
		3.不要获取未设置的样式，不兼容
			padding-left:10px;
			获取padding:0px 0px 0px 10px
			这个可以
		4.不要有空格

*/
function getStyle( obj, attr ) {
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle( obj, false )[attr];
}