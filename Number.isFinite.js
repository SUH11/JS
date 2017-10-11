/*
  ES5实现ES6的Number.isFinite方法
*/
(function(global) {
  var global_isFinite = global.isFinite;
  
  Object.defineProperty(Number, 'isFinite', {
    value: function isFinite(value) {
      return typeof value === 'number' && global_isFinite(value);
    },
    configurable: true,
    enumerable: false,
    writable: true
  });
  
})(this);
