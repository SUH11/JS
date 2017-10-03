/*
  重排序方法，针对数值、对象型
  注：sort方法是针对字符串的
*/
function compare(value1, value2) {
  return value1 - value2;
}
//e.g
var arr = [0, 10, 15, 5];
arr.sort();    //0, 10, 15, 5
arr.sort( compare );   // 0, 5, 10, 15
