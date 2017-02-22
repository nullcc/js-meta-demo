// Object.prototype.toLocaleString
// 语法: obj.toLocaleString();
// 返回值: obj的字符串表示

// example 1
var obj = {a: 1, b: 2};
console.log(obj.toLocaleString()); // 输出: [object Object]
var array = [1, 2 ,3];
console.log(array.toLocaleString()); // 输出: 1,2,3
var number = new Number(100);
console.log(number.toLocaleString()); // 输出: 100
var date = new Date();
console.log(date.toLocaleString()); // 输出: 2017-02-22 16:05:59
var func = function(){
  console.log('this is a func');
};
console.log(func.toLocaleString()); // 输出: function func() {
                                    //   console.log('this is a func');
                                    // }
var myObj = {
  firstName: 'Will',
  lastName: 'Smith',
  toLocaleString: function(){
    return this.firstName + ' ' + this.lastName
  }
};
console.log(myObj.toLocaleString()); // 输出: Will Smith
