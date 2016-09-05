"use strict";

/**
 * const 声明复杂类型变量时，指向的引用地址，不是数据
 * 所有可以改变复杂类型变量属性值。却不能重新对变量赋值，改变了引用地址，则出现异常。
 * const 声明类型，变量不可更改，且必须初始化，进行赋值。
 */
const  b={};
b.name="xiaoli";

b.name="xiao wang";

console.log(b);//{ name: 'xiao wang' }

//b={}; //报错