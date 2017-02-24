// Reflect.construct等同于调用new操作符号，比如new Target(...)
// 语法: Reflect.construct(target, argumentsList[, newTarget])
// 参数:
// target: 要被调用的函数
// argumentsList: 传给函数调用的参数列表，是一个类数组对象
// newTarget(可选的): 实际被调用的构造器，如果该参数不存在，则使用target本身作为构造器
// 返回值: 使用newTarget(如果给定的话)或者target构造的新实例
// 如果target或newTarget不是构造器，会抛出异常

// example 1
var d = Reflect.construct(Date, [1776, 6, 4]);
console.log(d instanceof Date); // 输出: true
console.log(d.getFullYear()); // 输出: 1776

// example 2
// 使用另一个构造器
function someConstructor() {}
var result = Reflect.construct(Array, [], someConstructor);
console.log(Reflect.getPrototypeOf(result)); // 输出: someConstructor {}
console.log(Array.isArray(result)); // true
