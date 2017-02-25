// Reflect.setPrototypeOf和Object.setPrototypeOf类似，对指定对象设置prototype
// 语法: Reflect.setPrototypeOf(target, prototype)
// 参数:
// target: 目标对象
// prototype: 要设置的原型
// 返回值: 一个布尔值，表示原型设置是否成功

// example 1
console.log(Reflect.setPrototypeOf({}, Object.prototype)); // 输出: true

// 改变一个对象的原型
console.log(Reflect.setPrototypeOf({}, null)); // 输出: true

// 目标对象不可扩展时，返回false
console.log(Reflect.setPrototypeOf(Object.freeze({}), null)); // 输出: false

// 导致原型链循环时返回false
var target = {};
var proto = Object.create(target);
console.log(Reflect.setPrototypeOf(target, proto)); // 输出: false
