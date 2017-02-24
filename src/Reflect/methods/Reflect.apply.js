// Reflect.apply
// 语法: Reflect.apply(target, thisArgument, argumentsList)
// 参数:
// target: 要被调用的函数
// thisArgument: 给函数的this参数
// argumentsList: 传给函数调用的参数列表，是一个类数组对象
// 返回值: 使用给定this和参数调用指定函数的返回结果
// 在ES 5中，一般使用Function.prototype.apply()来指定函数的this和参数列表并调用它，
// 使用Reflect.apply会更加简洁一些，也容易理解

// example 1
console.log(Reflect.apply(Math.floor, undefined, [1.75])); // 输出: 1;
console.log(Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111])); // 输出: "hello"
console.log(Reflect.apply(RegExp.prototype.exec, /ab/, ['confabulation']).index); // 输出: 4
console.log(Reflect.apply(''.charAt, 'ponies', [3])); // 输出: i
