// Reflect.get获取一个对象的属性的值
// 语法: Reflect.get(target, propertyKey[, receiver])
// 参数:
// target: 被设置属性的对象
// propertyKey: 要获取其值的属性名称
// receiver:
// 返回值: 目标对象指定属性的值
// 如果target不是对象，会抛出异常

// example 1
// Object
var obj = { x: 1, y: 2 };
console.log(Reflect.get(obj, 'x')); // 输出: 1

// Array
console.log(Reflect.get(['zero', 'one'], 1)); // 输出: one

// Proxy
var x = {p: 1};
var obj = new Proxy(x, {
  get(t, k, r) { return k + 'bar'; }
});
Reflect.get(obj, 'foo'); // 输出: foobar
