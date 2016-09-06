'use strict';

//# es6扩展
//1. 二进制和八进制
// 二进制 0b ;八进制 0o11
console.log(0b11);
console.log(0o11);
console.log(Number('0o11'));
console.log('------------------------');
//2. Number.isFinite() 检查一个数值是否为有限
// Number.isNaN() 检查一个值是否为NaN(无效)

console.log(Number.isFinite(15));
console.log(Number.isFinite('true'));
console.log(Number.isNaN(15));
console.log(Number.isNaN(NaN));
console.log(Number.isNaN('15px'));
console.log(Number.isNaN('s15px'));
console.log('------------------------');

console.log(Math.sinh(30));

//3. 数值扩展