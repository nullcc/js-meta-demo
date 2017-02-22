// Object.values返回指定对象所有自身的可枚举属性的值数组
// 语法: Object.values(obj)
// 返回值: 指定对象所有自身的可枚举属性的值数组

// example 1
var obj = {a: 1, b: 2};
console.log(Object.values(obj)); // 输出: [ 1, 2 ]

Object.defineProperty(obj, 'c', { // 不可枚举
  value: 3,
  writable: true,
  configurable: true,
  enumerable: false
});
console.log(Object.values(obj)); // 输出: [ 1, 2 ]
