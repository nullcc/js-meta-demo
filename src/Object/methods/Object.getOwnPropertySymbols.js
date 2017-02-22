// Object.getOwnPropertySymbols方法返回指定对象自身的的所有symbol名
// 语法: Object.getOwnPropertySymbols(obj)
// 返回值: 对象symbol名的数组
// 和Object.getOwnPropertyNames相反，Object.getOwnPropertySymbols只返回指定对象的symbol属性，并不会返回字符串属性

// example 1
var obj = {};
var a = Symbol('a');
var b = Symbol.for('b');

obj[a] = 'localSymbol';
obj[b] = 'globalSymbol';
console.log(obj); // 输出: {}

var propertyNames = Object.getOwnPropertyNames(obj)
var symbolNames = Object.getOwnPropertySymbols(obj);
console.log(propertyNames); // 输出: []
console.log(symbolNames);   // 输出: [ Symbol(a), Symbol(b) ]
