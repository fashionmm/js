'use strict';

// 1.模板字符串采用反引用`包含,变量采用${}括起来。
//
let  name='xiao li';
let  age=20;

let  ss=`${name} 今年${age} 岁 `;

console.log(ss);

//2.所有模板中的空格与换行都是保留字符
//
let  aa=`<ul>
<li>a</li>
<li>b</li>
</ul>`;

console.log(aa);

