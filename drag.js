/*
	简单拖拽
*/

function drag( obj ) {
	obj.onmousedown = function( ev ) {
		var ev = ev || event;
		var disX = ev.clientX - obj.offsetLeft;
		var disY = ev.clientY - obj.offsetTop;
		// 设置全局捕获
		if( obj.setCapture ) {
			obj.setCapture();
		}

		document.onmousemove = function( ev ) {
			var ev = ev || event;
			var L = ev.clientX - disX;
			var T = ev.clientY - disY;
			// 限制范围的拖拽
			var maxL = document.documentElement.clientWidth - obj.offsetWidth;
			var maxT = document.documentElement.clientHeight - obj.offsetHeight;

			if( L < 0 ) {
				L = 0;
			} else if ( L > maxL ) {
				L = maxL;
			}
			if( T < 0 ) {
				T = 0;
			} else if ( T > maxT ) {
				T = maxT;
			}

			/*
				此处写碰撞代码及原理
					1.原理：九宫格检测碰撞方法

					2.代码：
						（1）求出L1 T1 R1 B1
						（2）求出L2 T2 R2 B2
						（3）找出四个边界条件
					代码实例：
						var L1 = L;
						var T1 = T;
						var R1 = L + obj.offsetWidth;
						var B1 = T + obj.offsetHeight;

						var L2 = oImg.offsetLeft;
						var T2 = oImg.offsetTop;
						var R2 = L2 + oImg.offsetWidth;
						var B2 = T2 + oImg.offsetHeight;

						if( R1 < L2 || L1 > R2 || B1 < T2 || T1 > B2 ) {
							oImg.src = '1.jpg';
						} else {
							oImg.src = '2.jpg';
						}
			*/

			obj.style.left = L + 'px';
			obj.style.top = T + 'px';

		}

		document.onmouseup = function() {
			document.onmousemove = document.onmouseup = null;
			// 释放全局捕获
			if( obj.releaseCapture ) {
				obj.releaseCapture();
			}
		}
		// 阻止默认事件
		return false;
	}
}




