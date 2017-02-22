// Object.defineProperties在指定对象上定义一系列属性
// 语法：Object.defineProperties(obj, props)
// 返回值：指定对象
// obj: 需要定义属性的对象
// props: 一个对象，里面的key是属性名，value是属性的值和一些配置
// props的构造:
//    value: 属性的值
//    writable: 属性是否可写，默认false
//    configurable: 属性是否可被配置，比如删除属性，默认false
//    enumerable: 属性是否可枚举，默认false
//    get: 属性的get方法
//    set: 属性的set方法
// * 需要注意的是一个属性不可以同时拥有accessors(get/set)和writable或者value
// 具体例子见 Object.defineProperty.js

// example 1
// 为obj对象定义一系列属性并配置这些属性
var obj = {};
Object.defineProperties(obj, {
  'foo': { // 可写可配置可枚举
    value: 'foo',
    writable: true,
    configurable: true,
    enumerable: true
  },
  'bar': { // 不可写不可配置不可枚举
    value: 'bar',
    writable: false
  }
});

console.log(obj); // 输出: { foo: 'foo' }
console.log(obj.foo); // 输出: foo
console.log(obj.bar); // 输出: bar
obj.foo = 'hello foo';
obj.bar = 'hello bar';
console.log(obj.foo); // 输出: hello foo
console.log(obj.bar); // 输出: bar
