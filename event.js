/*
  event事件的兼容版本，
  参考：https://github.com/markyun
*/
suhong.Event = {
			// 加载 类似jq的ready
			readyEvent: function(fn) {
				if ( document.addEventListener ) {
					document.addEventListener('DOMContentLoaded', function() {
						document.removeEventListener('DOMContentLoaded', arguments.callee, false);
					}, false);
					fn();
				} else {
					document.attachEvent('onreadystatechange', function() {
						document.detachEvent('onreadystatechange', arguments.callee);
						fn();
					});
				}
			},
			// 绑定
			addEvent: function(element, type, handler) {
				// 标准下不加on
				if ( element.addEventListener ) {
					element.addEventListener(type, handler, false);
				} else {
					element.attachEvent('on'+type, function() {
						handler.call(element);
					});
				}
			},
			removeEvent: function(element, type, handler) {
				if ( element.removeEventListener ) {
					element.removeEventListener(type, handler, false);
				} else {
					element.detachEvent(type, function() {
						handler.call(element);
					});
				}
			},
			stopPropagation: function(ev) {
				if ( ev.stopPropagation ) {
					ev.stopPropagation();
				} else {
					ev.cancelBubble = true;
				}
			},
			preventDefault: function(ev) {
				if ( ev.preventDefault ) {
					ev.preventDefault();
				} else {
					ev.returnValue = false;
				}
			},
			getTarget: function(ev) {
        if ( !ev ) {
          ev = this.getEvent();
        }
				return event.target || event.srcElement;
			},
			getEvent: function(ev) {
				var ev = ev || window.event;
				if ( !ev ) {
					var c = this.getEvent.caller;
					while( c ) {
						ev = c.arguments[0];
						if ( ev && Event === ev.constructor ) {
							break;
						}
						c = c.caller;
					}
				}
				return ev;
			}
		};
