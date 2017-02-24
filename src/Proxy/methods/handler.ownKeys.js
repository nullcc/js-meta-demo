// handler.ownKeys代理如下调用:
// Object.getOwnPropertyNames()
// Object.getOwnPropertySymbols()
// Object.keys()
// Reflect.ownKeys()
//
// 语法:
// var p = new Proxy(target, {
//   ownKeys: function(target) {
//   }
// });
// 参数:
// target: 目标对象
// 返回值: 一个可枚举的对象
// ownKeys的结果必须是一个数组，元素key类型可以是String或者Symbol，结果必须包含目标对象的所有不可配置的自身属性，
// 如果目标对象不可扩展，结果必须包含目标对象所有自身属性的名字且不能包含任何不是该目标对象属性的名字

// example 1
var p = new Proxy({}, {
  ownKeys: function(target) {
    console.log('ownKeys called');
    return ['a', 'b', 'c'];
  }
});

console.log(Object.getOwnPropertyNames(p)); // 输出: ownKeys called
                                            //      [ 'a', 'b', 'c' ]

// example 2
// 结果可以不包含目标对象的可配置的自身属性，但必须包含目标对象所有不可配置的自身属性，否则会报错
var obj = {a: 1};
Object.defineProperty(obj, 'b', { // 不可配置
  value: 2,
  writable: true,
  configurable: false,
  enumerable: true
});
var p = new Proxy(obj, {
  ownKeys: function(target) {
    return ['a'];
  }
});
// 不包含不可配置属性'b'将报错
console.log(Object.getOwnPropertyNames(p)); // TypeError: 'ownKeys' on proxy: trap result did not include 'b'

var p1 = new Proxy(obj, {
  ownKeys: function(target) {
    return ['b'];
  }
});
// 输出未包含可配置属性'a'
console.log(Object.getOwnPropertyNames(p1)); // 输出: [ 'b' ]

// example 3
// 如果目标对象不可扩展，结果必须包含目标对象所有自身属性的名字且不能包含任何不是该目标对象属性的名字
var obj = {a: 1, b: 2};
Object.defineProperty(obj, 'c', { // 不可配置
  value: 3,
  writable: true,
  configurable: false,
  enumerable: true
});
Object.preventExtensions(obj); // 使obj变为不可扩展
var p = new Proxy(obj, {
  ownKeys: function(target) {
    return ['a'];
  }
});
// 未包含所有自身属性，报错
console.log(Object.getOwnPropertyNames(p)); // TypeError: 'ownKeys' on proxy: trap result did not include 'b'

var p1 = new Proxy(obj, {
  ownKeys: function(target) {
    return ['a', 'b'];
  }
});
// 只包含了所有可配置自身属性，未包含不可配置自身属性，报错
console.log(Object.getOwnPropertyNames(p1)); // TypeError: 'ownKeys' on proxy: trap result did not include 'c'

var p2 = new Proxy(obj, {
  ownKeys: function(target) {
    return ['a', 'b', 'c'];
  }
});
// 只包含了所有可配置自身属性，未包含不可配置自身属性，报错
console.log(Object.getOwnPropertyNames(p2)); // 输出: [ 'a', 'b', 'c' ]

var p3 = new Proxy(obj, {
  ownKeys: function(target) {
    return ['a', 'b', 'c', 'd'];
  }
});
// 包含了不是自身的属性，报错
console.log(Object.getOwnPropertyNames(p3)); // TypeError: 'ownKeys' on proxy: trap returned extra keys but proxy target is non-extensible
