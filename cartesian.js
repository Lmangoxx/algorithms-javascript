/*
 * @Author: hanxueliang
 * @Date: 2020-09-06 20:49:49
 * @LastEditors: hanxueliang
 * @LastEditTime: 2020-09-06 20:50:21
 * # cartesian 笛卡尔积
 * # 特点：多集合的直积
 * @param  {[Array]}   arr [原始数据]
 * @param  {[Number]}  arrIndex [arr数组索引值]
 * @param  {[Array]}   arrSult  [临时存储]
 */
var data = [[1,2],[3,4],[5,6,7]];
var result = [];
function cartesian (arr, arrIndex, arrSult) {
  if (arrIndex >= arr.length) {
    result.push(arrSult);
    return;
  }
  for (var i = 0; i < arr[arrIndex].length; i++) {
    var theSult = arrSult.slice(0, arrSult.length);
    // console.log(theSult);
    theSult.push(arr[arrIndex][i]);
    cartesian(arr, arrIndex + 1, theSult);
  }
}
cartesian(data, 0, []);
console.log('%c求[[1,2],[3,4],[5,6,7]]笛卡尔积： ↓', 'color: red');
console.log(result);