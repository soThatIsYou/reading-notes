// in 运算符作用：
//   就是判断 属性是否存在于对象中，如果存在，返回值为：true
//       如果不存在，则为：false
//       语法：属性 in 对象
const obj = {
  name1: 'jack',
  age: 9,
  abc: undefined,
};

// true
console.log('abc' in obj);
// false
console.log('qwer' in obj);

// in运算符判断数组
// 对于数组来说，索引号 就是属性
const arr = [1];
console.log('1' in arr); // false
console.log('0' in arr); // true
console.log(0 in arr); // true

// 访问数组的成员：
// 可以使用 数组索引 也可以使用 字符串
console.log(arr[0]);
console.log(arr['0']);
