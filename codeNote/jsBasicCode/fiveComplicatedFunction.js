let ar = new Array();
ar = [1,2,3,5,'a'];

ar.forEach((name) => console.log(`${name}`));

console.log(ar.every((num)=> num>0));
console.log(ar.some((num)=> num>0));
console.log(ar.filter((num)=> num>0));

console.log(ar.map((num)=> num>0)); // boolean 数组


var array =  [1500, 1200, 2000, 2100, 1800];
array = array.filter(function (item, index) {
  if (item < 2000) {
    return true;
  }
  return false;
});
console.log(array);

let array =  ['c', 'a', 'z', 'a', 'x', 'a'];
let index = -1;
do {
    // console.log(index);
    index = array.indexOf('a',index + 1);
  if (index != -1){
    console.log(index);
  }
} while (index > 0);

