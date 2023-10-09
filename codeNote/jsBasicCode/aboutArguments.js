function foo() {
  console.log(arguments.length); // 输出传递的实参数量

  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]); // 遍历访问每个实参的值
  }
}

foo(1, 'two', true); // 调用函数并传递实参


function fn(b) {  
    let a = 10;  
    return function () {
        console.log(a+b);  
        }
    }
fn(15)();

const c = 0;
console.log(c);
// c = 1;
console.log(c);


