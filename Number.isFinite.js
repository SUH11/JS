/*
  ES5实现ES6的Number.isFinite, isInteger方法
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

(function(global) {
  var isFinite = global.isFinite,
      floor = Math.floor;
  
  Object.defineProperty(Number, 'isInteger', {
    value: function isFinite(value) {
      return typeof value === 'number' && isFinite(value) && floor(value) === value;
    },
    configurable: true,
    enumerable: false,
    writable: true
  });
  
})(this);
