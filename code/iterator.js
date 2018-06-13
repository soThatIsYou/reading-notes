let array = new Array();
array = [1];

console.log(array[Symbol.iterator]);


array[Symbol.iterator] = function(){
  let index = 0;
  return{next(){

    if(index<array.length){
        index++
        return {value:'休想遍历我'};
    }else {
      return{value:'快停下来',done:true}
    }

  }
}}

let iter = array[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());

for(let one of array){
  console.log(one);
}
