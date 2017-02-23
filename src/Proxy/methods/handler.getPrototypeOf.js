// handler.getPrototypeOf代理获取对象原型的操作
// 语法:
// var p = new Proxy(obj, {
//   getPrototypeOf(target) {
//   }
// });
// 参数:
// target: 目标对象
// 返回值: 目标对象的prototype，必须是object或null.
// 如果目标对象不可扩展，Object.getPrototypeOf(proxy)必须返回和Object.getPrototypeOf(target)的值

// example 1
function Animal(){

}
function Cat(){

}
Cat.prototype = Object.create(Animal.prototype);
console.log(Cat.prototype); // 输出: Animal {}

var p = new Proxy(Cat, {
  getPrototypeOf: function(target) {
    console.log('getPrototypeOf called');
    return Animal.prototype;
  }
});

console.log(Object.getPrototypeOf(p) === Animal.prototype); // 输出: getPrototypeOf called
                                                  //      true

// 有5种方式可以触发proxy的getPrototypeOf
console.log(Object.getPrototypeOf(p) === Animal.prototype);  // 输出: getPrototypeOf called
                                                             //      true
console.log(Reflect.getPrototypeOf(p) === Animal.prototype); // 输出: true
                                                             //      true
console.log(p.__proto__ === Animal.prototype);               // 输出: true
                                                             //      true
console.log(Animal.prototype.isPrototypeOf(p));              // 输出: true
                                                             //      true
console.log(p instanceof Animal);                            // 输出: true
                                                             //      true
// 有两个例外情况
var obj = {};
var p = new Proxy(obj, {
    getPrototypeOf(target) {
        return 'foo';
    }
});
Object.getPrototypeOf(p); // TypeError: "foo" is not an object or null

var obj = Object.preventExtensions({});
var p = new Proxy(obj, {
    getPrototypeOf(target) {
        return {};
    }
});
Object.getPrototypeOf(p); // TypeError: expected same prototype value
