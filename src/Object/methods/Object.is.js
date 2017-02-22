// Object.is判断给定的两个值是否是同一个值
// 语法: Object.is(value1, value2);
// 返回值: 一个布尔值，表示alue1和value2是否是同一个值
// Object.is判断的是两个值的同一性，即两个值在内存中完完全全就是同一个东西则返回true，否则返回false

// example 1
console.log(Object.is(1, 1));           // true
console.log(Object.is('foo', 'foo'));   // true
console.log(Object.is({}, {}));         // false
console.log(Object.is({a: 1}, {a: 1})); // false
console.log(Object.is([], []));         // false
var obj = {a: 1};
console.log(Object.is(obj, obj));       // true
console.log(Object.is(null, null));     // true
console.log(Object.is(function(){}, function(){})); // false

// 特殊情况
console.log(Object.is(0, -0));          // false
console.log(Object.is(-0, -0));         // true
console.log(Object.is(+0, -0));         // false
console.log(Object.is(NaN, 1/0));       // false
console.log(Object.is(NaN, 0/0));       // true
console.log(Object.is(NaN, NaN));       // true
console.log(Object.is(undefined, undefined)); // true
