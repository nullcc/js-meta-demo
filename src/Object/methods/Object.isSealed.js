// Object.isSealed判断一个对象是否是密封的
// 语法: Object.isSealed(obj)
// 返回值: 一个布尔值，表示这个对象是否是密封的

// example 1
var obj = {};
console.log(Object.isSealed(obj)); // 输出: false

Object.preventExtensions(obj);
console.log(Object.isSealed(obj)); // 输出: true

var sealed = Object.seal(obj);
console.log(Object.isSealed(sealed)); // 输出: true

var frozen = Object.freeze(obj);
console.log(Object.isSealed(frozen)) // 输出: true
