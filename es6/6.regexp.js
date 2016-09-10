//1. 元字符

//2.字符类
// [] 表示一类字符，中括号里面的字符都满足条件，或者的关系，不是一一对应。
// 去反用[^] 表示 除里面的字符之外都满足。
console.log("defadgdeg".replace(/[df]/g,"x")); //将d 或者f 字符替换成 x。

//3. 范围类
// 采用[]和- 联合使用 某范围内字符，范围内字符也可以连写，表示更大范围。
// [a-z] a到z范围之间的字符，[a-zA-Z] a到z范围内或者A-Z范围内。
// 如果要满足- 也满足 的话 [a-z-] 多加一个- 字符即可。
console.log("de4faDd5g6dEe8g".replace(/[a-z]/g,"x")); //将a到z之间的字符替换替换成 x。//xx4xxDx5x6xEx8x
console.log("de4faDd5g6dEe8g".replace(/[a-zA-Z]/g,"x")); //将a到z之间或者A到Z的字符替换替换成 x。//xx4xxxx5x6xxx8x
console.log("d-e4faDd5g6d-Ee8g".replace(/[a-zA-Z-]/g,"x")); //将a到z之间或者A到Z 或者 -的字符替换替换成 x。//xxx4xxxx5x6xxxx8x
console.log("d-e4faDd5g6d-Ee8g".replace(/[^a-zA-Z-]/g,"x")); //将a到z之间或者A到Z 或者 -之外的字符替换替换成 x。//d-exfaDdxgxd-Eexg

//4.预定义类，边界字符
//  \d  [0-9] 数字    \D [^0-9] 非数字
//  .  [^\r\n]除回车换行之外的任意字符         ^ 以某字符开始。在中括号中表示取反。 $ 表示某字符结尾。 \b 表示单词边界。 \B 表示非边界
// \s [\r\n\t\x0b\f] 空白字符 另外：\r 回车 \n 换行 \t 水平制表符 \x0b 垂直制表符  \f 换页  ;
// \S [^\r\n\t\x0b\f] 非空白字符
// \w [a-zA-Z_0-9] 表示单词字符 字母 数字 下划线。  \W 除字母 数字 下划线的字符

// 5. 量词
// ? 表示0或者1次 也就是最多一次； + 表示至少一次； * 任意次； {n} 表示n次 {n,m} 表示n到m次  {n,} 表示至少n次

// 6。 贪婪模式非贪婪模式
// 贪婪模式： 尽可能多的匹配字符； /\d{5,10}/g  优先匹配10个字符
// 非贪婪模式： 尽可能少的匹配字符。后面加上？ 来表示非贪婪；/\d{5,10}？/g 这个表达式优先匹配5个字符；

console.log("1234678".replace(/\d{3,5}/g,"x")); //x78
console.log("1234678".replace(/\d{3,5}?/g,"x")); //xx8

// 7. 分组，或 ，反向引用，忽悠分组
// 分组 用（） 括起来   或 |
// 反向引用： 采用分组可以将内容按照分组 顺序变化，应用分组使用$符号+分组顺序号。 $1 分组1
// 忽悠分组： 在分组中用？：  即可取消次分组的引用。 此分组序号，跳过，将不用考虑。

console.log("".replace(/\d{4}/g,""));

// 8. 前瞻  javascript 不支持后瞻 或者后顾
// 前瞻： 就是正则表达式在匹配到字符后，还需要对后面字符进行断言，满足条件（?=），是否符合条件。 需要断言不满足条件，那就是反向前瞻。采用(?!)

console.log("a1bbbc".replace(/\w(?=\d)/g,"x"));//其中只有a1匹配。其中只需要\w 匹配到。(?=\d) 部门是断言部分，判断是否满足 //x1bbbc
console.log("a1bbbc".replace(/\w(?!\d)/g,"x"));// 意思是匹配任意字符，但是紧随后的字符需要满足不是数字。  //axxxxx

// 9. 正则表达式的属性
// g  global 全文搜索
// i  ignoreCase 忽略大小写
// m   multline  多行匹配
// lastindex  当前匹配的最后一个字符的下一个位置。
// source   正则表达式文本内容。不包含属性部分。 /\w/g   文本部分: \w

// 10. 方法test exer

// 11. 字符串方法
//  search()   match()  split()  replace()

// 数字改成汉字大写
var str="2016";
var arr=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"]

var str1= str.replace(/\d/gi,function(){//参数 顺序 match  group1,...,index
    "use strict";
    return arr[arguments[0]];//arguments[0] 获取到匹配的字符。2,1，0，6
});

console.log(str1);