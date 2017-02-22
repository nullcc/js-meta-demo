// Object.isFrozen判断一个对象是否被冻结
// 语法: Object.isFrozen(obj)
// 返回值: 一个布尔值，表示这个对象是否被冻结

// example 1
var obj = {};
console.log(Object.isFrozen(obj)); // 输出: false
Object.freeze(obj);
console.log(Object.isFrozen(obj)); // 输出: true

obj = Object.preventExtensions({});
console.log(Object.isFrozen(obj)); // 输出: true

obj = Object.seal({});
console.log(Object.isFrozen(obj)); // 输出: true
