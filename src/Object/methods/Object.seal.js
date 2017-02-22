// Object.seal密封一个对象，这将会组织任何对该对象的新增属性操作，并且把该对象的所有属性设置为configurable: false
// 但是该对象所有writable为true的属性还是可以被赋值
// 语法: Object.seal(obj)
// 返回值: 被密封的对象

// example 1
var obj = {a: 1, b: 2};
Object.defineProperty(obj, 'c', { // 不可写
  value: 3,
  writable: false,
  configurable: true,
  enumerable: true
});
Object.seal(obj);

// obj.d = 4; // TypeError: Can't add property d, object is not extensible
obj.a = 'a';
console.log(obj.a); // 输出: a
obj.c = 'c'; // TypeError: Cannot assign to read only property 'c' of [object Object]
