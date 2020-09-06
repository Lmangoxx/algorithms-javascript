/*
 * @Author: hanxueliang
 * @Date: 2020-09-06 20:54:04
 * @LastEditors: hanxueliang
 * @LastEditTime: 2020-09-06 21:02:38
 * # quick 快速排序 平均时间复杂度O(NlogN)
 */
function quick(num) {
  const source = [];
  for (let i = 0; i < num; i++) {
    source.push(parseInt(Math.random() * num));
  }

  function sort(left, right) {
    if (left > right) return;

    let temp = source[left];
    let i = left;
    let j = right;
    while(i != j) {
      while(source[j] >= temp && i < j) {
        j--;
      }
      while(source[i] <= temp && i < j) {
        i++;
      }
      if (i < j) {
        let t = source[i];
        source[i] = source[j];
        source[j] = t;
      }
    }
    source[left] = source[i];
    source[i] = temp;

    sort(left, i - 1);
    sort(i + 1, right);
  }

  quicksort(0, num -1);
  return source;
}

console.log(quick(1000));