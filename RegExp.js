//var box =new RegExp('box');
//console.log(box);
//var box=new RegExp('xxx','ig');
//console.log(box)
//var box =/box/;
//return box;   断点调试不可以用box
//console.log(box);
//var patten =/box/i;
//var patten = RegExp('bss','ig')
//var string= 'bss';
//console.log(patten.test(string));
//var pat=/,/ig;
//var str='this is box,that box';
//console.log(str.match(pat).length)
//console.log(str.search(pat))  //searth 查到立即返回第一个遇到的位置
//console.log(str.replace(pat,''));
//console.log(str);
//var pat=/ /ig;
//var at='hsad daws das';
//console.log(typeof(at.split(pat)))
//console.log(RegExp.$_)


/*
*获取控制字符串
*/
//var box=function(){
//	return console.log(patten.test(str))
//};
//使用点字符 ---   用  .  进行替换元素；
//var patten=/g..gle/ig;
//var str='google';
//console.log(patten.test(str))

//重复匹配  ---  *  表示可以多次匹配
//var patten=/g.*gle/ig;
//console.log(patten.test(str))

//使用字符类匹配 ---  [a-z]表示匹配a-z中的元素
//var patten=/g[a-zA-Z][a-zA-Z]gle/ig;
//box();

//var patten=/g[^0-9]*gle/ig;box();  //表示匹配多个数字

//patten=/[a-z][A-Z]+/ig;box();   //表示匹配多次

 //使用元字符匹配
// patten=/g\w*gle/ig; box();  // \w* 匹配所有字母

// patten=/g\d*gle/ig; box();  // \d* 匹配所有字母

// patten=/g\D{7,}/ig; box();  // \D{7*}匹配最少7个字符

 //pattern=/^google$/; box();  // ^ $ 匹配开始^到结束$

 //patten=/\s/ig; box();  // \s  匹配空格

 //patten= /google\b/ig; box(); // 检测边缘

 // 使用模式匹配
 //patten=/google|www|com/ig; box()  //在三个字符串中选择（就是多选）

//patten=/(a){4,8}/ig; box()   //匹配分组中的字符4到8次


//str='this is 8google8';
//patten= /8(.*)8/;
//console.log(str.match(patten))  //获取移动啊u

//console.log(str.replace(patten,'<li>RegExp.$_</li>'))



/*
*
*举一些例子
*
*/


//-----1：检查邮政编码
//var patten=/[1-9][0-9]{5}/;
//var str='224000'
//console.log(patten.test(str))

//-----2: 检查文件压缩包

var patten= /[\w]+\.zip|rar|gz/;  //\w匹配所有 
var str='tyu.zip';
console.log(patten.test(str));

//-----3: 删除多余空格
var patten=/\s/g;
var str='asd asd sad';
console.log(str.replace(patten,''));

//-----4:邮政地址的检验
var patten=/^([0-9a-zA-Z_\.\-]+)@([0-9a-zA-Z_\.\-]+)\.([0-9a-zA-Z_]{2,4})$/;
