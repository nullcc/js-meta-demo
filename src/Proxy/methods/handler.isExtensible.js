// handler.isExtensible代理对象是否可以被扩展的调用，包括Object.isExtensible()和Reflect.isExtensible()两个调用
// 语法:
// var p = new Proxy(target, {
//   isExtensible: function(target) {
//   }
// });
// 参数:
// target: 目标对象
// 返回值: 一个布尔值
// Object.isExtensible(proxy)必须返回和Object.isExtensible(target)一样的值，否则报错

// example 1
var p = new Proxy({}, {
  isExtensible: function(target) {
    console.log('isExtensible called');
    return true;
  }
});

console.log(Object.isExtensible(p)); // 输出: isExtensible called
                                     //      true

var p = new Proxy({}, {
  isExtensible: function(target) {
    return false;
  }
});

Object.isExtensible(p); // TypeError is thrown，违反了上面说到的规则
