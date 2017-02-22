// obj.propertyIsEnumerable判断调用对象的指定属性是否可枚举
// 语法: obj.propertyIsEnumerable(prop)
// 返回值: 一个布尔值，调用对象的指定属性是否可枚举

// example 1
var obj = {a: 1};
console.log(obj.propertyIsEnumerable('a')); // 输出: true
Object.defineProperty(obj, 'b', { // 不可枚举
  value: 2,
  writable: true,
  configurable: true,
  enumerable: false
});
console.log(obj.propertyIsEnumerable('b')); // 输出: false
