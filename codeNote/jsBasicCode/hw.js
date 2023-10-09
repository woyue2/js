let str = 'abaasdffggghhjjkkgfddsssss3444343';
//1
console.log('字符串的长度:' + str.length);
//2
let specificPlace = [0,3,5,9];
let output = []
for (let i=0; i < specificPlace.length; i++){
    // let order = specificPlace[i];
    output.push(`第${specificPlace[i]}位是${str.charAt(specificPlace[i])}`);
}
console.log(output);

//3
let item, dict;
dict = {};
for (let i=0; i < str .length; i++){
    item = str.charAt(i);
    if ('i' == item) return true;
}

str = str.replace('g','22');
console.log(str);

str = str.slice(0,5);   
console.log(str);
