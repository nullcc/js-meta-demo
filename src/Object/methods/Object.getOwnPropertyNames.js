// Object.getOwnPropertyNames方法返回指定对象自身的的所有属性名，不管是不是可枚举的
// 语法: Object.getOwnPropertyNames(obj)
// 返回值: 对象属性名的数组
// Object.getOwnPropertyNames只返回指定对象的字符串属性，并不会返回symbol属性

// example 1
var obj = {
  a: 1,
  b: 2,
  foo: function(){}
};
var names = Object.getOwnPropertyNames(obj);
console.log(names); // 输出: [ 'a', 'b', 'foo' ]

Object.defineProperty(obj, 'bar', { // 不可枚举
  value: 'bar',
  writable: true,
  configurable: true,
  enumerable: false
});

// 不可枚举的自身属性也会被返回
var names = Object.getOwnPropertyNames(obj);
console.log(names); // 输出: [ 'a', 'b', 'foo', 'bar' ]

// 非自身属性不会被返回
obj.__proto__.baz = 'baz';
var names = Object.getOwnPropertyNames(obj);
console.log(names); // 输出: [ 'a', 'b', 'foo', 'bar' ]
