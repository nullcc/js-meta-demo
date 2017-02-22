// Object.assign()方法用来将源对象(一个或多个)中所有自身的可枚举属性复制到目标对象中
// 几个关键点：
// 1. 目标对象，只能有一个
// 2. 源对象，可以有一个或多个
// 3. 目标对象的属性会被源对象上的同名属性覆盖
// 4. 自身的属性，即是在源对象上调用hasOwnProperty('xxx')方法返回true的属性
// 5. 可枚举属性，即源对象上那些enumerable为true的属性
// 语法：Object.assign(target, ...sources)
// 返回值：目标对象

// example 1
// 一个源对象，一个目标对象
var target = {};
var source = {a: 1};
var target = Object.assign(target, source);
console.log(target); // 输出: { a: 1 }

// example 2
// 一个源对象，多个目标对象
var target = {};
var source1 = {a: 1};
var source2 = {b: 2, c: 3};
var target = Object.assign(target, source1, source2);
console.log(target); // 输出: { a: 1, b: 2, c: 3 }

// example 3
// 一个源对象，多个目标对象，属性覆盖
var target = {a: 1};
var source1 = {a: 'hello'};
var source2 = {b: 2, c: 3};
var target = Object.assign(target, source1, source2);
console.log(target); // 输出: { a: 'hello', b: 2, c: 3 }

// example 4
// Object.assign只会复制源对象自身的属性到目标对象
// b被设置到source对象的__proto__上面，因此b不是source自身的属性
var target = {};
var source = {a: 1};
source.__proto__.b = 2;
console.log(source.b) // 输出: 2
console.log(source.hasOwnProperty('b')) // 输出 false
var target = Object.assign(target, source);
console.log(target); // 输出: { a: 1 }

// example 5
// Object.assign只会复制源对象的那些可枚举的自身属性到目标对象
var target = {};
var source = {a: 1};
Object.defineProperty(source, 'b', {
  value: 2,
  enumerable: false // 设置b属性为不可枚举
});
console.log(source.b) // 输出: 2
console.log(source.hasOwnProperty('b')) // 输出 true
var target = Object.assign(target, source);
console.log(target); // 输出: { a: 1 }
