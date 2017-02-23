// handler.get代理一个对象属性的get操作
// 语法:
// var p = new Proxy(target, {
//   get: function(target, property, receiver) {
//   }
// });
// 参数:
// target: 目标对象
// property: 要获取值的属性名称
// receiver: 代理或从代理继承的对象
// 返回值: 你想返回什么都可以

// example 1
var target = {
  name: 'Will Smith',
  salary: 100000
};
var p = new Proxy(target, {
  get: function(target, property, receiver) {
    console.log('get property: ' + property);
    if (property === 'salary') {
      return "It's a secret!";
    }
    return target[property];
  }
});

console.log(p.name);   // 输出: get property: name
                       //      Will Smith
console.log(p.salary); // 输出: get property: salary
                       //      It's a secret!
