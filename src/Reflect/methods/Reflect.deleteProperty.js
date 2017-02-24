// Reflect.deleteProperty类似在对象上调用delete操作符
// 语法: Reflect.deleteProperty(target, propertyKey)
// 参数:
// target: 被设置属性的对象
// propertyKey: 被删除属性名称
// 返回值: 一个布尔值，表示删除属性是否成功
// 如果target不是一个对象，会抛出异常

// example 1
var obj = { x: 1, y: 2 };
Reflect.deleteProperty(obj, 'x'); // true
console.log(obj); // 输出: { y: 2 }

var arr = [1, 2, 3, 4, 5];
Reflect.deleteProperty(arr, '3'); // true
console.log(arr); // 输出: [1, 2, 3, , 5]

// 当指定的属性名不存在时返回true
console.log(Reflect.deleteProperty({}, 'foo')); // 输出: true

// 当指定的属性不可配置时返回falses
console.log(Reflect.deleteProperty(Object.freeze({foo: 1}), 'foo')); // 输出: false

// target不是一个对象时，抛出异常
Reflect.deleteProperty('y', 'x'); // TypeError: Reflect.deleteProperty called on non-object
