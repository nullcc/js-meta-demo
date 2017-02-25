// Reflect.getPrototypeOf和Object.getPrototypeOf方法类似，
// 返回指定对象的prototype
// 语法: Reflect.getPrototypeOf(target)
// target: 目标对象
// 返回值: 该对象的prototype

// example 1
console.log(Reflect.getPrototypeOf({})); // 输出: {}
console.log(Reflect.getPrototypeOf(Object.prototype)); // 输出: null
console.log(Reflect.getPrototypeOf(Object.create(null))); // 输出: null
function Animal() {

}
var Cat = Object.create(Animal.prototype);
console.log(Reflect.getPrototypeOf(Cat)); // 输出: Animal {}
