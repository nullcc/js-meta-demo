// handler.apply会代理一个函数的调用
// 语法:
// var p = new Proxy(target, {
//   apply: function(target, thisArg, argumentsList) {
//   }
// });
// 参数:
// target: 目标对象
// thisArg: 调用函数时的this对象
// argumentsList: 调用函数时的参数列表
// 返回值: 看你想返回什么了

// example 1
var adderProxy = new Proxy(function(){}, {
  apply: function(target, thisArg, argumentsList) {
    console.log(`called with ${argumentsList}`);
    let sum = 0;
    for (let i = 0; i < argumentsList.length; i++) {
      sum += argumentsList[i];
    }
    return sum;
  }
});

console.log(adderProxy(1, 2, 3)); // 输出: called with 1,2,3
                                  //      6
