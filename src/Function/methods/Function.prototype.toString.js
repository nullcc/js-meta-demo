// Function.prototype.toString返回函数源码的字符串表示
// 语法: function.toString()
// 返回值: 函数源码的字符串表示

// example 1
function Animal(name) {
  this.name = name;
}
console.log(Animal.toString()); // 输出: function Animal(name) {
                                     //   this.name = name;
                                     // }
console.log(Object.toString()); // 输出: function Object() { [native code] }
