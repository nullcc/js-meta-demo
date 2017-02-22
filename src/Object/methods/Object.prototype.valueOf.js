// object.valueOf返回调用对象的原始值
// 语法: object.valueOf()
// 返回值: 调用对象的原始值
// valueOf方法一般会由js来调用，当引用某个对象时，js自动调用valueOf方法获取值

// example 1
var MyNumberType = function(number){
  this.baseNumber = 10;
  this.number = number;
};
var myNumber= new MyNumberType(3);
console.log(myNumber.valueOf()); // 输出: MyNumberType { number: 3 }

MyNumberType.prototype.valueOf = function(){
  return this.baseNumber + this.number;
};

console.log(myNumber + 6); // 输出: 19
