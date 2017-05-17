function startMove(obj, json, fn){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		// 3.检测停止
		var bStop = true;
		for(var attr in json){
			// 1.取当前的值
			var iCur = 0;
			if(attr == 'opacity'){
				iCur = parseInt(parseFloat(getStyle(obj, attr))*100);
			}else{
				iCur = parseInt(getStyle(obj, attr));
			}

			// 2.算速度
			var iSpeed = (json[attr] - iCur) / 8;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

			// 3.检测停止
			/*if(iCur === json[attr]){
				clearInterval(obj.timer);
				if(fn){
					fn();
				}
			}else{
				
			}*/
			// 3.检测停止
			if(iCur != json[attr]){
				bStop = false;
			}
			
			if(attr == 'opacity'){
				iCur += iSpeed;
				obj.style.opacity = iCur / 100;
				obj.style.filter = 'alpha(opacity:'+ iCur +')';
			}else{
				obj.style[attr] = iCur + iSpeed + 'px';
			}
		}
		if(bStop){
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
		}
		
	},30);

}
function getStyle(obj, attr){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, false)[attr];
}