// Object.setPrototypeOf对指定对象设置prototype
// 语法: Object.setPrototypeOf(obj, prototype);
// 返回值: 指定对象

// example 1
function Foo() {}
function Bar() {}
function Baz() {}

Object.setPrototypeOf(Bar.prototype, Foo.prototype);
Object.setPrototypeOf(Baz.prototype, Bar.prototype);

var baz = new Baz();

console.log(Baz.prototype.isPrototypeOf(baz));    // 输出: true
console.log(Bar.prototype.isPrototypeOf(baz));    // 输出: true
console.log(Foo.prototype.isPrototypeOf(baz));    // 输出: true
console.log(Object.prototype.isPrototypeOf(baz)); // 输出: true
