# 关于浏览器的检测
## navigator 对象的属性与方法 主要进行检测浏览器

1. 关于浏览器型号检测
console.log('浏览器名称'+navigator.appName)
//返回    浏览器名称Netscape
console.log('浏览器版本'+navigator.appVersion)
//返回   浏览器版本5.0 (Windows NT 6.3; Win64; x64) 
//       AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.76 Safari/537.36


console.log('用户代理字符串'+navigator.userAgent)
/*
* 返回：
* 用户代理字符串Mozilla/5.0 (Windows NT 6.3; Win64; x64) 
*AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.76 Safari/537.36
*/


console.log('浏览器所在的系统'+navigator.platform)
/*
*用户代理字符串Mozilla/5.0 (Windows NT 6.3; Win64; x64) 
*AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.76 Safari/537.36
*/

2. 浏览器嗅探
需要额外的js文件--browserdetect.js
可以确定浏览器的型号与版本
console.log(BrowserDetect.browser) //名称
console.log(BrowserDetect.version) //版本
console.log(BrowserDetect.os)      //系统


3. 检测插件
3.1  列出所有插件
(function(){
	for(var i in navigator.plugins){
		console.log(navigator.plugins[i])
	}
})();

3.2  ie下获取所有列表
Ie没有插件的概念，但是有与其雷同的ActiveX
console.log(hasIEPlugin('ShockwaveFlash.ShockwaveFlash'))




#  关于客户端的检测
目的：了解当前浏览器所处系统，所支持语法，所有具有的特殊性能



1. 能力检测（检测浏览器的能力，无论什么浏览器，只要有能力就好）
var width=window.innerWidth  //如果是非ie浏览器
if (typeof width!='number') {
	if (document.compatMode=='css1Compat') {
		width=document.documentElement.clientWidth;
	}else{
		width=document.body.clientWidth
	}
}
//如果是IE就使用document，如果不是标准模式可以使用body


2. 怪癖检测 （bug检测--也是识别特属属性，但是主要是想知道浏览器有什么bug）
for(var 0 in box){console.log(0)}
for(var o in box){console.log(o)}
//IE-11已经修复 0 返回缺少标识符 o 返回“box”未定义


3. 用户代理检测 （用户代理是服务器获取浏览器的方法，在每一次http请求中都会包含）
document.write(navigator.userAgent)
返回（Mozilla/5.0 (Windows NT 6.3; Win64; x64) 
AppleWebKit/537.36 (KHTML, like Gecko) 
Chrome/56.0.2924.76 Safari/537.36






