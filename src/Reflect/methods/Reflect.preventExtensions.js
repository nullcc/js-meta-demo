// Reflect.preventExtensions使目标对象不可扩展，类似Object.preventExtensions
// 语法: Reflect.preventExtensions(target)
// 参数:
// target: 目标对象
// 返回值: 一个布尔值，表示目标对象是否成功地被设置为不可扩展

// example 1
var empty = {};
console.log(Reflect.isExtensible(empty)); // 输出: true

Reflect.preventExtensions(empty);
console.log(Reflect.isExtensible(empty)); // 输出: false

// example 2
// Reflect.preventExtensions的参数需要是一个对象，否则抛出异常
// Object.preventExtensions(1)没有这个限制
Reflect.preventExtensions(1);// TypeError: Reflect.preventExtensions called on non-object
console.log(Object.preventExtensions(1)); // 输出: 1
