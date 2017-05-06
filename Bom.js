# Bom 对象
## window 对象的方法与属性
window是指当前窗口，常用open，scroll，setTimeput()

1. 系统对话框

window.alert('weq');

window.confirm('请确认或取消')
console.log(window.confirm('请确认或取消'))

var re=window.prompt('dsf')
console.log(re)

2. 新建窗口

open('baidu.com')    //只是在本域打开页面
open('http://www.baidu.com','名称','width=500,height=500')
第一个参数必须是完整的url，第二个是名称


3.间歇调用与超时调用
setTimeout(function(){
	alert('10000')
},10000)

var theNumber=setTimeout(function(){
	alert('10000')
},10000)   //返回一个ID 开辟变量

clearTimeout(theNumber)  //取消超调


setInterval(function(){}.10000)  //定时执行，同时也返回id