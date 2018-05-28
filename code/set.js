//set结构不会添加重复的值
let set = new Set();
set.add(1);
set.add(1);
console.log(set.size);


//向set中插入值时，值不会发生转换 1 和 “1”是两个不同的值
set.add("1");
console.log(set);

//===认为NaN不等于自身，set认为NaN等于自身,其他规则都和===完全相同

set.add(NaN);
set.add(NaN);
console.log(set);
console.log(`NaN===自身吗？`,NaN===NaN);


//两个对象总是不精确相等的
set.add({});
set.add({});
console.log(set);

//set 可以用来对数组去重
function dedupe(array) {
  return Array.from(new Set(array));
}






//set有两个属性
//size
//constructor
console.log(set.size);
console.log(set.constructor);
