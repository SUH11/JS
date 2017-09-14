/*
  数组随机排序的三种方法
*/
Array.prototype.randSort = function() {
  var len = this.length;
  for ( var i = 0; i < len; i ++ ) {
    var randomNum = Math.floor( Math.random()*len );
    var temp = this[randomNum];
    this[randomNum] = arr[i];
    this[i] = temp;
  }
  return this; 
};

function randSort( arr ) {
  var mixedArr = [];
  while( arr.length > 0 ) {
    var randomIndex = parseInt( Math.random()*arr.length );
    mixedArr.push( arr[randomIndex] );
    arr.splice( randomIndex, 1);
    // arr.splice(1, 0);  arr.splice(1, 1); arr.splice(1, 1, 'bbb');
  }
  return mixedArr;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.sort(function() {
  // 大于0，交换位置
  return 0.5 - Math.random();
});
