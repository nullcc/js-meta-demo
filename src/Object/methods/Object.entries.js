// Object.entries(obj)会返回obj的所有自身的可枚举属性
// 语法：Object.entries(obj)
// 返回值：[key, value]的数组，例如[[key1, value1], [key2, value2]]
// 这是一个草案方法，所以需要依赖于babel

// example 1
var obj = {foo: 1, bar: 2};
var attrs = Object.entries(obj);
console.log(attrs); // 输出: [ [ 'foo', 1 ], [ 'bar', 2 ] ]

Object.defineProperty(obj, 'baz', { // 不可枚举
  value: 'baz',
  writable: true,
  configurable: true,
  enumerable: false
});

attrs = Object.entries(obj);
console.log(obj.baz); // 输出: baz
console.log(attrs); // 输出: [ [ 'foo', 1 ], [ 'bar', 2 ] ]
