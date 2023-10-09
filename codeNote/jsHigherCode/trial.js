function eat (callback) {
    setTimeout(function () {
      console.log('吃完了')
      callback()
    }, 1000)
}
  
// 有点像lambda无参函数
eat(function () {
    console.log('去唱歌')
})


function genFun (type) {
    return function (obj) {
      console.log(Object.prototype.toString.call(obj));

      //Object.prototype.toString(obj) 会简单地把 obj 转换为字符串返回,如果 obj 是对象,则按 obj.toString() 递归处理。
      console.log(Object.prototype.toString(obj)); 
      return Object.prototype.toString.call(obj) === type
    }
  }
  
var isArray = genFun('[object Array]')
var isObject = genFun('[object Object]')

console.log(isArray([])) // => true
console.log(isObject({})) // => true