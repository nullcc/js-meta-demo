// Reflect.has等同于in操作符，但它能判断不可枚举属性或原型链中的属性是否存在
// 语法: Reflect.has(target, propertyKey)
// 参数:
// target: 目标对象
// propertyKey: 要确定是否存在的属性名称
// 返回值: 一个布尔值，表示属性是否存在于对象中
// 如果target不是对象，会抛出异常

// example 1
console.log(Reflect.has({x: 0}, 'x')); // 输出: true
console.log(Reflect.has({x: 0}, 'y')); // 输出: false

// 在原型链中的属性也可以被找到
console.log(Reflect.has({x: 0}, 'toString')); // 输出: true

// 使用代理的情况
var obj = new Proxy({}, {
  has(t, k) { return k.startsWith('door'); }
});
console.log(Reflect.has(obj, 'doorbell')); // true
console.log(Reflect.has(obj, 'dormitory')); // false

// 不可枚举的属性也能被找到
var o = {};
Object.defineProperty(o, 'a', { // 不可枚举
  value: 1,
  writable: true,
  configurable: true,
  enumerable: false
});
console.log(Reflect.has(o, 'a')); // 输出: true
