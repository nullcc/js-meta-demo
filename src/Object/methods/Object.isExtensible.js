// Object.isExtensible判断一个对象是否可以扩展，即是否可以在其上添加新属性
// 语法: Object.isExtensible(obj)
// 返回值: 一个布尔值，表示是否可以在指定对象上添加新属性
// 一个对象可以被Object.preventExtensions(), Object.seal()或者Object.freeze()标记为不可扩展

// example 1
var obj = {};
console.log(Object.isExtensible(obj)); // 输出: true

Object.preventExtensions(obj);
console.log(Object.isExtensible(obj)); // 输出: false

var sealed = Object.seal(obj);
console.log(Object.isExtensible(sealed)); // 输出: false

var frozen = Object.freeze(obj);
console.log(Object.isExtensible(frozen)) // 输出: false
