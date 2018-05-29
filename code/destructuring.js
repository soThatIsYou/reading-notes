//具有iterator接口的数据结构，都可以采用数组形式的结构赋值
function* fibs() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}


var [first, second, third, fourth, fifth, sixth] = fibs();

console.log(first);
// TODO: iterator接口？








var jsonData = { id: 42, status: "OK", data: [867, 5309] };
let { id, status, data } = jsonData;
 console. log( id, status, data);
