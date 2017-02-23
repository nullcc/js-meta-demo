// handler.deleteProperty代理对象的delete操作符
// 语法:
// var p = new Proxy(target, {
//   deleteProperty: function(target, property) {
//   }
// });
// 参数:
// target: 目标对象
// property: 要删除的属性名称
// 返回值: 一个布尔值，表示对象属性的descriptor是否设置成功


// example 1
var target = {a: 1};
var p = new Proxy(target, {
  deleteProperty: function(target, property) {
    console.log('delete property: ' + property);
    return Reflect.deleteProperty(target, property);
  }
});
console.log(p.a); // 输出: 1
delete p.a;       // 输出: delete property: a
console.log(p.a); // 输出: undefined
