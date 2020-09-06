/*
 * @Author: hanxueliang
 * @Date: 2020-09-06 21:01:58
 * @LastEditors: hanxueliang
 * @LastEditTime: 2020-09-06 21:06:12
 * # bubble 冒泡排序 平均时间复杂度O(N²)
 */
function bubble(num) {
  const source = [];
  for (let i = 0; i < num; i++) {
    source.push(parseInt(Math.random() * num));
  }

  for (let i = 0; i < num - 1; i++) {
    for (let j = 0; j < num - i; j++) {
      if (source[j] > source[j+1]) {
        let t = source[j];
        source[j] = source[j+1];
        source[j+1] = t;
      }
    }
  }

  return source;
}

console.log(bubble(10000));