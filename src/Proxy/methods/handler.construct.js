// handler.construct会代理一个函数的new操作
// 语法:
// var p = new Proxy(target, {
//   construct: function(target, argumentsList, newTarget) {
//   }
// });
// 参数:
// target: 目标对象
// argumentsList: 调用函数时的参数列表
// newTarget: 最初调用的构造函数
// 返回值: 必须是一个对象，否则会报错

// example 1
function Person(name) {
  this.name = name;
};
var id = 1;
var personProxy = new Proxy(Person, {
  construct: function(target, argumentsList, newTarget) {
    console.log('Person new');
    var person = new target(...argumentsList);
    person.id = id++;
    return person;
  }
});

console.log(new personProxy('Will Smith')); // 输出: Person new
                                            // Person { name: 'Will Smith', id: 1 }
