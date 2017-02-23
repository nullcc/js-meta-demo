// handler.defineProperty代理Object.defineProperty方法
// 语法:
// var p = new Proxy(target, {
//   defineProperty: function(target, property, descriptor) {
//   }
// });
// 参数:
// target: 目标对象
// property: 要定义descriptor的属性名称
// descriptor: 要设置在指定属性上的descriptor
// 返回值: 一个布尔值，表示对象属性的descriptor是否设置成功

// example 1
var target = {};
var p = new Proxy(target, {
  defineProperty: function(target, property, descriptor) {
    console.log('define property: ' + property);
    return Reflect.defineProperty(target, property, descriptor);
  }
});

Object.defineProperty(p, 'name', {
  value: 'proxy',
  writable: true,
  configurable: true,
  enumerable: true
});
console.log(p.name); // 输出: define property: name
                     //      proxy

Object.defineProperty(p, 'age', { // 不可写
  value: 20,
  writable: false,
  configurable: true,
  enumerable: true
});
console.log(p.age); // 输出: 20
p.age = 30;
console.log(p.age); // 输出: 20
