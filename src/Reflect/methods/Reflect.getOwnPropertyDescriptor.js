// Reflect.getOwnPropertyDescriptor和Object.getOwnPropertyDescriptor类似
// 它返回指定对象上自身属性的descriptor
// 语法: Reflect.getOwnPropertyDescriptor(target, propertyKey)
// 参数:
// target: 被设置属性的对象
// propertyKey: 要获取其descriptor的属性名称
// 返回值: 目标对象指定属性的descriptor
// 如果target不是对象，会抛出异常

// example 1
console.log(Reflect.getOwnPropertyDescriptor({x: 'hello'}, 'x'));
// 输出: {value: "hello", writable: true, enumerable: true, configurable: true}

console.log(Reflect.getOwnPropertyDescriptor({x: 'hello'}, 'y'));
// 输出: undefined

console.log(Reflect.getOwnPropertyDescriptor([], 'length'));
// 输出: {value: 0, writable: true, enumerable: false, configurable: false}

// example 2
// Reflect.getOwnPropertyDescriptor只会返回对象自身属性的descriptor
var obj = {a: 1};
obj.__proto__.b = 2;
console.log(obj.a); // 输出: 1
console.log(obj.b); // 输出: 2
console.log(Reflect.getOwnPropertyDescriptor(obj, 'a')); // 输出: { value: 1, writable: true, enumerable: true, configurable: true }
console.log(Reflect.getOwnPropertyDescriptor(obj, 'b')); // 输出: undefined
