/*
    原生JS实现jQ的ready方法
*/
function ready(fn) {
  if (document.addEventListener ) {
    document.addEventListener('DOMContentLoaded', function() {
      document.removeEventListener('DOMContentLoaed', arguments.callee, false);
      fn();
    }, false);
  } else {
    document.attachEvent('onreadystatechange', function() {
      document.detachEvent('onreadystatechange', argument.callee);
      fn();
    });
  }
}
