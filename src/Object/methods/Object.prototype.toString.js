// Object.prototype.toString返回调用对象的字符串表示
// 语法: obj.toString()
// 默认情况下，toString方法从Object继承而来，当对象被打印时，会自动调用这个方法
// 如果一个对象没有覆写这个方法，那么调用toString时将默认返回"[object type]"，type是对象类型

// example 1
function Animal(name){
  this.name = name;
}

var animal = new Animal('animal');
console.log(animal.toString()); // 输出: [object Object]

Animal.prototype.toString = function() {
  return '[object ' + this.constructor.name + '] ' + this.name;
};
console.log(animal.toString()); // 输出: [object Animal] animal

// example 2
// 使用toString来检测对象类型
var toString = Object.prototype.toString;
console.log(toString.call(new Date));     // 输出: [object Date]
console.log(toString.call(new String));   // 输出: [object String]
console.log(toString.call(Math));         // 输出: [object Math]
console.log(toString.call(undefined));    // 输出: [object Undefined]
console.log(toString.call(null));         // 输出: [object Null]
console.log(toString.call(NaN));          // 输出: [object Number]
console.log(toString.call(function(){})); // 输出: [object Function]
