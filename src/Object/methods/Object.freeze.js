// Object.freeze(obj)冻结指定对象，使这个对象无法被添加新属性，无法被删除属性，无法修改属性
// 语法：Object.freeze(obj)
// Object.freeze只能冻结非嵌套的属性，也就是第一层属性，如果要冻结整个对象(包括里面的所有嵌套属性)，需要递归调用Object.freeze

// example 1
// Object.freeze只能冻结对象的非嵌套属性
var obj = {
  foo: 1,
  bar: {
    a: 'a',
    b: 'b'
  }
};
console.log(obj.foo); // 输出: 1
console.log(obj.bar); // 输出: { a: 'a', b: 'b' }
Object.freeze(obj);

obj.foo = 'foo'; // TypeError: Cannot assign to read only property 'foo' of [object Object]
obj.bar = null; // TypeError: Cannot assign to read only property 'bar' of [object Object]
obj.newKey = 2; //TypeError: Can't add property newKey, object is not extensible
obj.bar.a = 'hello';
console.log(obj.foo); // 输出: 1
console.log(obj.bar); // 输出: { a: 'hello', b: 'b' }

// example 2
// 当obj拥有嵌套属性时，使用deepFreeze递归冻结整个obj
function deepFreeze(obj) {
  // 获取obj上的所有属性，不管该属性是否是可枚举的
  var propNames = Object.getOwnPropertyNames(obj);
  // 在冻结obj之前冻结它的所有属性
  propNames.forEach(function(name) {
    var prop = obj[name];
    // 如果属性是一个对象，递归冻结它
    if (typeof prop == 'object' && prop !== null)
      deepFreeze(prop);
  });
  // 最后冻结对象本身
  return Object.freeze(obj);
}

var obj = {
  foo: 1,
  bar: {
    a: 'a',
    b: 'b'
  }
};

deepFreeze(obj);
obj.bar.a = 'hello'; // TypeError: Cannot assign to read only property 'a' of [object Object]
obj.bar.newKey = 2; // TypeError: Can't add property newKey, object is not extensible
