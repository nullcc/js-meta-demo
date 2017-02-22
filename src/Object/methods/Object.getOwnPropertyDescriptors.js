// Object.getOwnPropertyDescriptors返回指定对象上所有自身属性的descriptor
// 语法：Object.getOwnPropertyDescriptors(obj)
// 返回值：对象，内容为obj上prop所有自身属性的descriptor，key为属性名，value为它的descriptor

// example 1
var obj = {a: 1, b: 2};
var descriptors = Object.getOwnPropertyDescriptors(obj);
console.log(descriptors); // 输出: { a: { value: 1, writable: true, enumerable: true, configurable: true },
                          //        b: { value: 2, writable: true, enumerable: true, configurable: true } }
obj.__proto__.c = 3; // 在obj的原型链上定义属性c
console.log(obj.c); // 输出: 3
var descriptors = Object.getOwnPropertyDescriptors(obj);
console.log(descriptors); // 输出: { a: { value: 1, writable: true, enumerable: true, configurable: true },
                          //        b: { value: 2, writable: true, enumerable: true, configurable: true } }

// example 2
// 创建对象的浅拷贝
// 浅拷贝的含义：新对象的非嵌套属性是独立的拷贝，改变其中一个，另一个不变。而嵌套属性则是引用，并非独立拷贝，改变其中一个另一个也会跟着变
var obj = {
  a: 1,
  b: 2,
  c: {
    foo: 'foo'
  }};
var objShallowClone = Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj)
);
console.log(obj);             // 输出: { a: 1, b: 2, c: { foo: 'foo' } }
console.log(objShallowClone); // 输出: { a: 1, b: 2, c: { foo: 'foo' } }
obj.a = 'a';
console.log(obj);             // 输出: { a: 'a', b: 2, c: { foo: 'foo' } }
console.log(objShallowClone); // 输出: { a: 1, b: 2, c: { foo: 'foo' } }
obj.c.foo = 'new foo';
console.log(obj);             // 输出: { a: 'a', b: 2, c: { foo: 'new foo' } }
console.log(objShallowClone); // 输出: { a: 1, b: 2, c: { foo: 'new foo' } }
