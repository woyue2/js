function fn(x, y, z) {
    console.log(fn.length) // => 形参的个数
    console.log(arguments) // 伪数组实参参数集合
    console.log(arguments.callee === fn) // 函数本身
    console.log('caller is '+ fn.caller) // 函数的调用者
    console.log('name is ' + fn.name) // => 函数的名字
  }
   
function f() {
    fn(10, 20, 30)
}
  
f()