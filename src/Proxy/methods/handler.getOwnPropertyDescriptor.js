// handler.getOwnPropertyDescriptor返回对象属性的descriptor
// 语法:
// var p = new Proxy(target, {
//   getOwnPropertyDescriptor: function(target, prop) {
//   }
// });
// 参数:
// target: 目标对象
// prop: 要获取descriptor的属性名称
// 返回值: 属性的descriptor，必须是object或undefined

// example 1
var target = {a: 20};
var p = new Proxy(target, {
  getOwnPropertyDescriptor: function(target, prop) {
    console.log('getOwnPropertyDescriptor: ' + prop);
    return { configurable: true, enumerable: true, value: 10 };
  }
});

console.log(Object.getOwnPropertyDescriptor(p, 'a').value); // 输出: getOwnPropertyDescriptor: a
                                                            //       10
