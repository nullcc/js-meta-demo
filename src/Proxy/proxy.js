// 使用Proxy对象可以对一个指定对象设置代理，对该对象的一些操作会被代理截获处理
// handler.getPrototypeOf()
// 截获Object.getPrototypeOf
// handler.setPrototypeOf()
// 截获Object.setPrototypeOf
// handler.isExtensible()
// 截获Object.isExtensible.
// handler.preventExtensions()
// 截获Object.preventExtensions.
// handler.getOwnPropertyDescriptor()
// 截获Object.getOwnPropertyDescriptor.
// handler.defineProperty()
// 截获Object.defineProperty.
// handler.has()
// 截获in操作符.
// handler.get()
// 截获对象的取值操作
// handler.set()
// 截获对象的赋值操作
// handler.deleteProperty()
// 结果对象的delete操作符
// handler.ownKeys()
// 截获Object.getOwnPropertyNames和Object.getOwnPropertySymbols
// handler.apply()
// 截获对象的函数调用
// handler.construct()
// 截获在对象上使用new操作符

// example 1
// 对一个对象设置代理，取对象属性会先判断该属性是否存在于被代理的对象中，
// 如果存在则返回这个属性的值，否则固定返回42
var handler = {
  get: function (target, key, receiver) {
    return key in target ? Reflect.get(target, key, receiver) : 42;
  },
  set: function (target, key, value, receiver) {
    return Reflect.set(target, key, value, receiver);
  }
};

var obj = new Proxy({}, handler);
obj.a = 1;
obj.b = undefined;

console.log(obj.a, obj.b); // 输出: 1, undefined
console.log('c' in obj, obj.c); // 输出: false, 42
