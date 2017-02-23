// Function.prototype.bind方法会返回一个新函数，这个函数使用指定的对象作为this，之后是绑定在函数上的参数
// 语法: fun.bind(thisArg[, arg1[, arg2[, ...]]])
// 返回值：一个被绑定了this和给定参数的新函数

// example 1
var animal = {
  name: 'animal',
  getName: function(){
    return this.name;
  }
};
var cat = {
  name: 'cat'
};
var dog = {
  name: 'dog'
};
console.log(animal.getName()); // 输出: animal
var catGetName = animal.getName.bind(cat); // catGetName的this已经绑定为cat
console.log(catGetName()); // 输出: cat
// 需要注意，使用bind绑定后的函数再使用bind绑定另一个值是无效的
var dogGetName = catGetName.bind(dog);
console.log(dogGetName()); // 输出: cat

// example 2
// 使用bind绑定this并传参
var commodity1 = {
  price: 100
};
var commodity2 = {
  price: 150
};

function getPrice(discount){
  return this.price * discount;
};

// 定义一个获取打八折后商品1价格的函数
var getCommodity1PriceWhen20PercentOff = getPrice.bind(commodity1, 0.8);
console.log(getCommodity1PriceWhen20PercentOff()); // 输出: 80
// 定义一个获取打七折后商品2价格的函数
var getCommodity2PriceWhen30PercentOff = getPrice.bind(commodity2, 0.7);
console.log(getCommodity2PriceWhen30PercentOff()); // 输出: 105

// example 3
// 绑定局部参数
// 局部参数经常被用在js函数式编程中
var adder = function(){
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
};
console.log(adder(1, 2, 3)); // 输出: 6
var addWith5 = adder.bind(null, 5); // 绑定了一个局部参数5
console.log(addWith5(1, 2, 3)); // 输出: 11
