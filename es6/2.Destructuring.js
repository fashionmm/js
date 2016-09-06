"use strict";
/**
 * 解构： 从数组或者对象中提取值，对变量进行赋值
 * nodejs 下目前不支持解构 参考 http://www.open-open.com/lib/view/open1452169232870.html解决
 */

//let [a]=[1];
//console.log(a);

let obj = {name:'zfpx',age:7};
let {name,age} = obj;
console.log(name,age);