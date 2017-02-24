// handler.preventExtensions代理了
// Object.preventExtensions()
// Reflect.preventExtensions()
// 这两个调用
// 语法:
// var p = new Proxy(target, {
//   preventExtensions: function(target) {
//   }
// });
// 参数:
// target: 目标对象
// 返回值：必须返回一个布尔值
// 强制约定: 如果Object.isExtensible(proxy)返回false，则Object.preventExtensions(proxy)只能返回true

// example 1
var p = new Proxy({}, {
  preventExtensions: function(target) {
    console.log('preventExtensions called');
    Object.preventExtensions(target);
    return true;
  }
});

Object.preventExtensions(p); // 输出: preventExtensions called

// example 2
// proxy的preventExtensions代理方法返回true，但是被代理对象本身是可扩展的，这违反了强制约定，报错
var p = new Proxy({}, {
  preventExtensions: function(target) {
    return true;
  }
});

Object.preventExtensions(p); // TypeError: 'preventExtensions' on proxy: trap returned truish but the proxy target is extensible
