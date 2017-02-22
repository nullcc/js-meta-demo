// Object.create()方法通过指定prototype对象和一些属性创建一个新对象
// 语法：Object.create(proto[, propertiesObject])
// 返回值：新对象

// example 1
// 创建"类"继承体系
function Animal(name) { // 父类
  this.name = name;
}

// 父类方法
Animal.prototype.getName = function() {
  return this.name;
};

// 子类
function Cat(name) {
  Animal.call(this, name); // 调用父类的构造函数
}

// Cat"继承"自Animal
Cat.prototype = Object.create(Animal.prototype);

// 设置Cat的构造函数
// 这里需要注意的是，如果没有下面这行代码，打印Cat.prototype.constructor将输出[Function: Animal]
Cat.prototype.constructor = Cat;
console.log(Cat.prototype.constructor); // 输出: [Function: Cat]

var cat = new Cat('Ruby');

console.log(cat instanceof Cat); // 输出: true
console.log(cat instanceof Animal); // 输出: true
console.log(cat.getName()); // 输出: Ruby

// example 2
// 携带属性创建一个新对象
var obj = Object.create(null);
console.log(obj); // 输出: {}

// 上面代码等同于
var obj1 = Object.create(Object.prototype);
console.log(obj1); // 输出: {}

var obj2 = Object.create(Object.prototype, {
  foo: { // 可写可删除可枚举
    value: 'foo',
    writable: true,
    configurable: true,
    enumerable: true
  },
  bar: { // 不可写可删除可枚举
    value: 'bar',
    writable: false,
    configurable: true,
    enumerable: true
  },
  baz: { // 可写不可删除不可枚举
    value: 'baz',
    writable: true,
    configurable: false,
    enumerable: false
  }
});
console.log(obj2); // 输出: { foo: 'foo', bar: 'bar' }
obj2.bar = 1;
console.log(obj2.bar); // 输出: bar
delete obj2.baz;
console.log(obj2.baz) // 输出: baz
