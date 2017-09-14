/*
  JS 继承的六种方式(类采用原型链+工厂方式)
*/

function Parent(name) {
  this.name = name || 'Parent';
}
Parent.prototype.showName = function() {
  console.log( this.name );
};

/*
  1. 简单原型链继承
  缺点：
     1.无法向父级传递参数
     2.无法实现多继承
     3.原型对象的引用属性是所有实例共享的
*/
function Child( age ) {
  this.age = age || 18;
}
Child.prototype = new Parent();
Child.prototype.showAge = function() {
  console.log( this.age );
};

/*
  2.构造函数继承
  缺点：
     1.无法向父级传递参数
     2.无法实现多继承
     3.无法实现函数复用，每个子类实例都持有一个新的fun函数，太多了就会影响性能
*/
function Doctor( name, color ) {
  Parent.call( this ); // apply也可以
  this.color = color || 'white';
}
Doctor.prototype.showColor = function() {
  console.log( this.color );
};

/*
  3.组合继承
  缺点：
     1.子类原型上有一份多余的父类实例属性
*/
function Study( name, hobby ) {
  Parent.call( this );
  this.hobby = hobby || 'hobby';
}
Study.prototype = new Parent();

/*
  4.寄生组合继承（堪称完美，但是太麻烦了）
*/

/*
  5.原型链继承
*/

/*
  6.寄生式继承
*/


