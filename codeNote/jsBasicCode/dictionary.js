// 创建一个空对象
let dictionary = {};

// 添加键值对
dictionary['apple'] = '苹果';
dictionary['banana'] = '香蕉';
dictionary['orange'] = '橘子';

// 访问值
console.log(dictionary['apple']);  // 输出: 苹果
console.log(dictionary['banana']); // 输出: 香蕉

// 修改值
dictionary['apple'] = '红苹果';

// 删除键值对
delete dictionary['orange'];

// 遍历字典
for (let key in dictionary) {
  console.log(key + ': ' + dictionary[key]);
}