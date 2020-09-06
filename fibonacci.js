/*
 * @Author: hanxueliang
 * @Date: 2020-09-06 20:48:35
 * @LastEditors: hanxueliang
 * @LastEditTime: 2020-09-06 20:49:38
 * # fibonacci 斐波那契数列
 * # 特点：前面相邻两项之和等于后一项的值。
 * @param  {[Number]} index  [要循环显示多少个值]
 * @param  {[Array]}  array  [初始数列]
 * @return {[Array]}  [计算过后的斐波那契数列]
 */
const fibonacci = function (index, array) {
  var fib = function (n) {
      if(n >= index) return;
      var result = array[n];
      if (typeof result !== 'number') {
          result = fib(n-1) + fib(n-2);
          array[n] = result;
          fib(++n);
      }
      return result;
  }
  fib(array.length);
  return array;
};

console.log(`fibonacci 斐波那契数列：[${fibonacci(10, [0, 1])}]`);
