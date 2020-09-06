/*
 * @Author: hanxueliang
 * @Date: 2020-09-06 20:39:13
 * @LastEditors: hanxueliang
 * @LastEditTime: 2020-09-06 20:39:56
 */
function horse25() {
  let count = 0;
  const NUM = 25;
  const source = [];
  function game(arr, fun = (a, b) => (a -b)) {
    count += 1;
    return arr.sort(fun);
  }
  for (let i = 0; i < 5; i++) {
    const a = [];
    for (let j = 0; j < 5; j++) {
      a.push(parseInt(Math.random() * 100));
    }
    source.push(a);
  }
  source.map((item) => game(item));
  game(source, (a, b) => a[0] - b[0]);
  const result = game(
    [
      source[0][1],
      source[0][2],
      source[1][0],
      source[1][1],
      source[2][0],
    ]
  );
  console.log(source);
  console.log(`跑了${count}次,最快的三匹马${[source[0][0], ...result.slice(0, 2)].join(',')}`);
}