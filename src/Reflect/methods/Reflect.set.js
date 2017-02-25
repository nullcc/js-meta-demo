// Reflect.set类似在一个对象上设值
// 语法: Reflect.set(target, propertyKey, value[, receiver])
// 参数:
// target: 被设置属性的对象
// propertyKey: 要设置其值的属性名称
// value: 被设置的值
// receiver:
// 返回值: 一个布尔值，表示对象设值是否成功

// example 1
// Object
var obj = {};
Reflect.set(obj, 'prop', 'value');
console.log(obj.prop); // 输出: value

// Array
var arr = ['duck', 'duck', 'duck'];
Reflect.set(arr, 2, 'goose');
console.log(arr[2]); // 输出: goose

// 直接缩短一个数组
Reflect.set(arr, 'length', 1);
console.log(arr); // 输出: [ 'duck' ]

// 只有一个参数时，propertyKey 和 value 都是 "undefined".
var obj = {};
Reflect.set(obj); // true
console.log(Reflect.getOwnPropertyDescriptor(obj, 'undefined'));
// 输出: { value: undefined, writable: true, enumerable: true, configurable: true }
