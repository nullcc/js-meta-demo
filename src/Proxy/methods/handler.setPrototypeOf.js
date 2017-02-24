// handler.setPrototypeOf代理下面两个调用：
// Object.setPrototypeOf()
// Reflect.setPrototypeOf()
// 语法:
// var p = new Proxy(target, {
//   setPrototypeOf: function(target, prototype) {
//   }
// });
// 参数:
// target: 目标对象
// prototype: 对象的新原型
// 返回值: 一个布尔值，如果对象原型被成功改变，返回true，否则返回false
// 强制约定: 如果目标对象不可扩展，参数prototype必须和Object.getPrototypeOf(target)一样

// example 1
// 如果不希望别人改变一个对象的prototype，代理的setPrototypeOf可以返回false，或者直接抛出一个异常
// 如果是返回false，在一个不会抛出异常的方法上调用时，比如 Reflect.setPrototypeOf()，则不会抛出异常
var handlerReturnsFalse = {
    setPrototypeOf(target, newProto) {
        return false;
    }
};

var newProto = {}, target = {};

var p1 = new Proxy(target, handlerReturnsFalse);
Object.setPrototypeOf(p1, newProto); // TypeError: 'setPrototypeOf' on proxy: trap returned falsish
Reflect.setPrototypeOf(p1, newProto); // returns false

// example 2
// 如果代理的setPrototypeOf抛出异常，则不管是Object.setPrototypeOf还是Reflect.setPrototypeOf，都会抛出异常
var handlerThrows = {
    setPrototypeOf(target, newProto) {
        throw new Error('custom error');
    }
};

var newProto = {}, target = {};

var p2 = new Proxy(target, handlerThrows);
Object.setPrototypeOf(p2, newProto);  // Error: custom error
Reflect.setPrototypeOf(p2, newProto); // Error: custom error

// example 3
// 如果目标对象不可扩展，参数prototype必须和Object.getPrototypeOf(target)一样
var handler = {
    setPrototypeOf(target, newProto) {
        return true;
    }
};

var oldProto = {}, newProto = {}, target = Object.create(oldProto);
Object.preventExtensions(target);

var p = new Proxy(target, handler);
Object.setPrototypeOf(p, newProto);  // TypeError: 'setPrototypeOf' on proxy: trap returned truish for setting a new prototype on the non-extensible proxy target
Reflect.setPrototypeOf(p, newProto); //TypeError: 'setPrototypeOf' on proxy: trap returned truish for setting a new prototype on the non-extensible proxy target

Object.setPrototypeOf(p, oldProto);  // true
Reflect.setPrototypeOf(p, oldProto); // true
