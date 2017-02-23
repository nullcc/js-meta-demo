// handler.ownKeys代理如下调用:
// Object.getOwnPropertyNames()
// Object.getOwnPropertySymbols()
// Object.keys()
// Reflect.ownKeys()
//
// 语法:
// var p = new Proxy(target, {
//   ownKeys: function(target) {
//   }
// });
// 参数:
// target: 目标对象
// 返回值: 一个可枚举的对象
// ownKeys的结果必须是一个数组，元素key类型可以是String或者Symbol，结果必须包含目标对象的不可配置的自身属性，
// 如果目标对象不可扩展，结果必须包含目标对象所有自身属性的名字且不能包含任何不是该目标对象属性的名字

// example 1
