// call改变this的对象
function sayHi(name) {
    console.log(this.name + ' says hi ' + name);
}
  
var person = {
    name: 'John'
  };


sayHi('Jack'); // undefined says hi Jack
sayHi.call(person, 'Jack'); // John says hi Jack  
// this 就是一个 对象

// apply only two arguments, the 2nd one is array
function addNumbers(a, b) {
    console.log(this.num);
    console.log(this.num + a + b);
  }
  
var obj = {
    num: 10
};
  
addNumbers.apply(obj, [1,2]); //13 // 后面是数组为参数，参数个数不够则报错，超出则舍弃超出的部分，运行
addNumbers.call(obj, 1, 2);   //13 'call' is most same as 'apply'
let bindResult = addNumbers.bind(obj, 1, 2);
bindResult()

// // bind 绑定参数，但是不运行， == 自己变成了一个新的无参函数
// function sayHi() {
//     console.log(this.name);
// }
  
// var person = {
//     name: 'John'  
// };
  
// var boundFunc = sayHi.bind(person);
// boundFunc(); // John