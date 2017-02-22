// Object.preventExtensions阻止对指定对象添加新属性
// 语法: Object.preventExtensions(obj)
// 返回值: 返回被设置为不可扩展的对象

// example 1
var obj = {};
obj.a = 1;
console.log(obj.a); // 输出: 1
Object.preventExtensions(obj);
obj.b = 2; // TypeError: Can't add property a, object is not extensible
