// Reflect.defineProperty类似Object.defineProperty()，但返回值是一个布尔值
// 语法: Reflect.defineProperty(target, propertyKey, attributes)
// 参数:
// target: 被设置属性的对象
// propertyKey: 被定义或修改的属性名称
// attributes: 被定义或修改的属性的
// 返回值: 一个布尔值，表示定义属性是否成功

// example 1
var obj = {};
Reflect.defineProperty(obj, 'x', {value: 7}); // true
console.log(obj.x); // 输出: 7

// example 2
// 检查定义属性是否成功，然后执行响应的代码
if (Reflect.defineProperty(target, property, attributes)) {
  // success
} else {
  // failure
}
