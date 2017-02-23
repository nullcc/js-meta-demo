// handler.has代理对象的in操作符
// 语法:
// var p = new Proxy(target, {
//   has: function(target, prop) {
//   }
// });
// 参数:
// target: 目标对象
// prop: 需要判断是否在对象中的具体属性名
// 返回值: 一个布尔值

// example 1
// 在对象的in操作中隐藏salary属性
var target = {
  name: 'Will Smith',
  salary: 100000
};
var p = new Proxy(target, {
  has: function(target, prop) {
    console.log('has called: ' + prop);
    if (prop !== 'salary') {
      return true;
    }
    return false;
  }
});

console.log('name' in p);   // 输出: has called: name
                            //      true
console.log('salary' in p); // 输出: has called: salary
                            //      false
