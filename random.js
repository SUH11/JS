/*
  生成x-y的随机数
*/
function selectRandom(lowerValue, upperValue) {
  var choices = upperValue - lowerValue + 1;
  return Math.floor( Math.random()*choices + lowerValue );
}
