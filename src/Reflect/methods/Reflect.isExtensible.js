// Reflect.isExtensible判断一个对象是否可扩展
// 语法: Reflect.isExtensible(target)
// 参数:
// target: 目标对象
// 返回值: 一个布尔值，表示对象是否可扩展

// example 1
var empty = {};
console.log(Reflect.isExtensible(empty)); // 输出: true

Reflect.preventExtensions(empty);
console.log(Reflect.isExtensible(empty)); // 输出: false

var sealed = Object.seal({});
console.log(Reflect.isExtensible(sealed)); // 输出: false

var frozen = Object.freeze({});
console.log(Reflect.isExtensible(frozen)); // 输出: false

// example 2
// Reflect.isExtensible第一个参数如果不是对象的话，会抛出异常
// Object.isExtensible会返回false
console.log(Reflect.isExtensible(1)); // TypeError: Reflect.isExtensible called on non-object

console.log(Object.isExtensible(1)); // 输出: false
