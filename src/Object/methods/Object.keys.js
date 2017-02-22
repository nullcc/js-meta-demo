// Object.keys返回一个数组，表示指定对象自身的可枚举属性
// 语法: Object.keys(obj)
// 返回值: 指定对象自身的可枚举属性的数组

// example 1
var obj = {a: 1, b: 2};
console.log(Object.keys(obj)); // 输出: [ 'a', 'b' ]

Object.defineProperty(obj, 'c', { // 不可枚举
  value: 3,
  writable: true,
  configurable: true,
  enumerable: false
});
console.log(Object.keys(obj)); // 输出: [ 'a', 'b' ]

obj.__proto__.d = 4;
console.log(Object.keys(obj)); // 输出: [ 'a', 'b' ]
