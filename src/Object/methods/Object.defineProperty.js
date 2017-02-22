// Object.defineProperty在指定对象上使用descriptor定义或者修改一个属性
// 语法：Object.defineProperty(obj, prop, descriptor)
// 返回值：指定对象
// descriptor的构造:
//    value: 属性的值
//    writable: 属性是否可写，默认false
//    configurable: 属性是否可被配置，比如删除属性，默认false
//    enumerable: 属性是否可枚举，默认false
//    get: 属性的get方法
//    set: 属性的set方法
// * 需要注意的是一个属性不可以同时拥有accessors(get/set)和writable或者value
// 所以以下代码会出错：
// var obj = {};
// Object.defineProperty(obj, 'a', {
//   value: 'a',
//   writable: true,
//   configurable: true,
//   enumerable: true,
//   get: function(){
//     return baz;
//   },
//   set: function(value){
//     baz = value;
//   }
// });

// example 1
// 为obj对象定义一个新属性并配置这个属性
var obj = {};
Object.defineProperty(obj, 'foo', { // 可写可配置可枚举
  value: 'foo',
  writable: true,
  configurable: true,
  enumerable: true
});

Object.defineProperty(obj, 'bar', { // 不可写可配置可枚举
  value: 'bar',
  writable: false,
  configurable: true,
  enumerable: true
});

console.log(obj.foo); // 输出: foo
console.log(obj.bar); // 输出: bar
obj.bar = 'hello bar';
console.log(obj.bar); // 输出: bar

var baz = 'baz';
Object.defineProperty(obj, 'baz', { // 不可写可配置可枚举
  configurable: true,
  enumerable: true,
  get: function(){
    return baz;
  },
  set: function(value){
    baz = value;
  }
});
console.log(obj.baz); // 输出: baz
obj.baz = 1;
console.log(obj.baz); // 输出: 1
