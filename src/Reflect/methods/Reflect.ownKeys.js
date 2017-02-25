// Reflect.ownKeys以数组的形式返回指定对象中所有自身属性的属性名(包括字符串key和symbol key)
// 等同于：Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target)).
// 语法: Reflect.ownKeys(target)
// 参数:
// target: 目标对象
// 返回值: 一个数组，元素为指定对象中所有自身属性的属性名

// example 1
console.log(Reflect.ownKeys({z: 3, y: 2, x: 1})); // [ "z", "y", "x" ]
console.log(Reflect.ownKeys([])); // ["length"]

var sym = Symbol.for('comet');
var sym2 = Symbol.for('meteor');
var obj = {[sym]: 0, 'str': 0, '773': 0, '0': 0,
           [sym2]: 0, '-1': 0, '8': 0, 'second str': 0};
console.log(Reflect.ownKeys(obj));
// [ "0", "8", "773", "str", "-1", "second str", Symbol(comet), Symbol(meteor) ]
// Indexes in numeric order,
// strings in insertion order,
// symbols in insertion order
