let a = new Array();

console.log(a[Symbol.iterator]);


let iter = a[Symbol.iterator]();


console.log(iter.next());
