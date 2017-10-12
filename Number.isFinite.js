/*
  ES5实现ES6的Number.isFinite, isInteger方法
  为什么ES6会将增加Number.parseInt、Number.parseFloat?
  1、使js这门语言趋于完善
  2、实现模块化，逐渐减少全局变量
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
