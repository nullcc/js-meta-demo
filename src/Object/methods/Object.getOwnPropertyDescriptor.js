// Object.getOwnPropertyDescriptor返回指定对象上的指定的自身属性的descriptor
// 语法：Object.getOwnPropertyDescriptor(obj, prop)
// 返回值：obj上prop属性的descriptor

// example 1
var obj = {a: 1};
var aDescriptor = Object.getOwnPropertyDescriptor(obj, 'a');
console.log(aDescriptor); // 输出: { value: 1, writable: true, enumerable: true, configurable: true }

obj.__proto__.b = 2; // 在obj的原型链上定义属性b
console.log(obj.b); // 输出: 2
var bDescriptor = Object.getOwnPropertyDescriptor(obj, 'b');
console.log(bDescriptor); // 输出: obj
