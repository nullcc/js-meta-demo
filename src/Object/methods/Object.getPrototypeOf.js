// Object.getPrototypeOf获取指定对象的prototype
// 语法: Object.getPrototypeOf(obj)
// 返回值: obj的prototype

// example 1
var obj = {};
var a = Object.create(obj);
var aPrototype = Object.getPrototypeOf(a);
console.log(aPrototype === obj);  // 输出: true
console.log(a.__proto__ === obj); // 输出: true
