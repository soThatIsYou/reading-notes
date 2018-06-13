let a = new Array();
a = [1];

console.log(a[Symbol.iterator]);


a[Symbol.iterator] = function(){
  let index = 0;
  return{next(){

    if(index<a.length){
        index++
        return {value:'休想遍历我'};
    }else {
      return{value:'快停下来',done:true}
    }

  }
}}

let iter = a[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());

for(let one of a){
  console.log(one);
}
