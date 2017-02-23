// Function.prototype.apply使用传入的第一个参数作为this，第二个参数是一个参数数组，调用该函数
// 语法: fun.apply(thisArg, [argsArray])
// 返回值: 函数本身的返回值

// example 1
// 指定this调用函数
function greeting(word) {
  return word + ', ' + this.name;
}

console.log(greeting('Hello')); // TypeError: Cannot read property 'name' of undefined
var person = {
  name: 'Will Smith'
};
console.log(greeting.apply(person, ['Hello'])); // 输出: Hello, Will Smith

// example 2
// 包装函数，俗称“猴子补丁”
// 猴子补丁指的是在不改变原函数本身的源码的情况下，为原函数增加新功能的做法
var person = {
  name: 'Will Smith',
  getName: function(){
    return this.name;
  }
};

console.log(person.getName()); // 输出: Will Smith
var oldFunc = person.getName;
person.getName = function() {
  console.log('call getName function!');
  return oldFunc.apply(this);
};
console.log(person.getName()); // 输出: call getName function!
                               //      Will Smith
