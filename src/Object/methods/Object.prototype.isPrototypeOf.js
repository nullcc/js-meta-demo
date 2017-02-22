// Object.prototype.isPrototypeOf判断调用对象是否存在于指定对象原型链中
// 语法: prototypeObj.isPrototypeOf(object)
// 返回值: 调用对象是否存在于指定对象原型链中的布尔值表示

// example 1
function Foo() {}
function Bar() {}
function Baz() {}

Bar.prototype = Object.create(Foo.prototype);
Baz.prototype = Object.create(Bar.prototype);

var baz = new Baz();

console.log(Baz.prototype.isPrototypeOf(baz));    // 输出: true
console.log(Bar.prototype.isPrototypeOf(baz));    // 输出: true
console.log(Foo.prototype.isPrototypeOf(baz));    // 输出: true
console.log(Object.prototype.isPrototypeOf(baz)); // 输出: true
