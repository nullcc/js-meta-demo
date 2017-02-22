// Object.prototype.hasOwnProperty判断一个给定的属性是否是指定对象的自身属性
// 语法: obj.hasOwnProperty(prop)
// 返回值: 一个布尔值，表示给定的属性是否是指定对象的自身属性

// example 1
var proto = {a: 1};
var obj = Object.create(proto);
obj.b = 2;

console.log(obj.hasOwnProperty('a')); // 输出: false
console.log(obj.hasOwnProperty('b')); // 输出: true
console.log(obj); // 输出: { b: 2 }
