/*
	获取obj到浏览器的top值
*/
function getTop(obj){
	var iTop = 0;

	while(obj){
		iTop += obj.offsetTop;
		obj = obj.offsetParent;
	}

	return iTop;

}