// // handler.set代理对目标对象的设值操作
// // 会代理以下几个调用:
// // 直接对代理对象设值: proxy[foo] = bar和proxy.foo = bar
// // 继承属性设值: Object.create(proxy)[foo] = bar
// // 使用Reflect对象设值: Reflect.set()
// // 语法:
// // var p = new Proxy(target, {
// //   set: function(target, property, value, receiver) {
// //   }
// // });
// // 参数:
// // target: 目标对象
// // property: 设值属性名
// // value: 要设置的值
// // receiver: 被设值的原始对象
// // 返回值: 必须返回一个布尔值，如果是true表示设值成功，如果是false，怎会抛出异常
// // 在以下几种情况下，对代理对象设值将抛出异常
// // 1. 对一个不可写且不可配置的属性设置和它目前值不相同的另一个值
// // 2. 严格模式下，set返回false会抛出一个异常
//
// // example 1
// var p = new Proxy({}, {
//   set: function(target, prop, value, receiver) {
//     console.log('set called: ' + prop + ' = ' + value);
//     Reflect.set(target, prop, value);
//     return true;
//   }
// });
//
// p.a = 10;         // 输出: set called: a = 10
// console.log(p.a); // 输出: 10
//
// // example 2
// var obj = {a: 1};
// Object.defineProperty(obj, 'b', { // 不可写且不可配置
//   value: 2,
//   writable: false,
//   configurable: false,
//   enumerable: true
// });
// var p = new Proxy(obj, {
//   set: function(target, prop, value, receiver) {
//     console.log('set called: ' + prop + ' = ' + value);
//     Reflect.set(target, prop, value);
//     return true;
//   }
// });
// p.a = 10;         // 输出: set called: a = 10
// console.log(p.a); // 输出: 10
// // 对不可写且不可配置的属性'b'设置和它目前值相同值没有问题
// p.b = 2;         // 输出: set called: b = 2
// console.log(p.b); // 输出: 2
// //  对一个不可写且不可配置的属性'b'设置和它目前值不相同的另一个值会报错
// p.b = 20;         // 输出: set called: b = 20
// console.log(p.b); // TypeError: 'set' on proxy: trap returned truish for property 'b' which exists in the proxy target
//                   // as a non-configurable and non-writable data property with a different value

// example 3
// 不能同时设置目标对象指定属性的set方法和代理的set方法
var obj = {a: 1};
Object.defineProperty(obj, 'b', { // 不可配置
  value: 2,
  writable: true,
  configurable: false,
  enumerable: true,
  set: function(){}
});

var p = new Proxy(obj, {
  set: function(target, prop, value, receiver) {
    console.log('set called: ' + prop + ' = ' + value);
    Reflect.set(target, prop, value);
    return true;
  }
});
p.b = 20; // TypeError: Invalid property descriptor. Cannot both specify accessors and a value or writable attribute, #<Object>
