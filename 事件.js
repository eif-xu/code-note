传统事件绑定
		内联模型---   <input type='bottom' value='按钮' onclick='alert("xxx")' />
		脚本模型---   var box=document.getElementById('logo');
					  box.onclick=function(){alert("xxx")}

实际上这些都不常用，最常用的是dom0级的方法，但是比较先进的是dom2级的处理方式
dom0级的方式：把一个函数赋值给一个事件的处理程序属性
dom2级的方式: 给予事件一个方法（addEventListener&&removeEventListener）


事件的分类
	鼠标事件  --页面元素都可以触发
	键盘事件  --当按下键盘时进行触发，如果按住不放会反复触发
	HTML事件  --当页面加载完成后进行触发

所有的事件处理都是由on+事件的名称构成
----------------------------------------------------------------------------------------------
鼠标事件


当用户单击鼠标时触发
click(function(event) {
	/* Act on the event */
});


当用户双击鼠标时触发
dblclick(function(event) {
	/* Act on the event */
});





点击鼠标未抬起
mousedown(function(event) {
	/* Act on the event */
});


点击鼠标进行释放
mouseup(function(event) {
	/* Act on the event */
});




鼠标指针在元素的内部上进行移动时反复的触发
mousemove(function(event) {
	/* Act on the event */
});


鼠标移入元素触发
mouseover(function(event) {
	/* Act on the event */
});

鼠标移出元素触发
mouseout(function(event) {
	/* Act on the event */
});



---------------------------------------------------------------------------------
键盘事件




按下任意键进行触发
keydown(function(event) {
	/* Act on the event */
});


按下字符键进行触发
keypress(function(event) {
	/* Act on the event */
});


当按键进行释放
keyup(function(event) {
	/* Act on the event */
});



----------------------------------------------------------------------------------
HTML事件



页面加载之后
load(function() {
	/* Act on the event */
});


页面卸载之后
unload(function(){

})




选择文本框（input或者textareat内容改变）
select(function(event) {
	event
});


文本框内容改变失去焦点
change(function(event) {
	/* Act on the event */
});


当页面或者元素获得焦点在window上触发
focus(function(event) {
	/* Act on the event */
});


当页面或者元素失去焦点在window上触发
blur(function(event) {
	/* Act on the event */
});



  
当用户点击提交在<form>中触发元素
submit(function(event) {
	/* Act on the event */
});



当用户点击重置按钮在<form>上触发元素
reset(function(event) {
	/* Act on the event */
});


当窗口或者框架大小发生变化时在window上触发
resize(function(event) {
	/* Act on the event */
});


当发生滚动时在window上进行触发
scroll(function(event) {
	/* Act on the event */
});


-------------------------------------------------------------------------------------

事件对象的定义
浏览器会自动分配一参数，作为事件的对象

如果需要获取元素（input）,使用this即可

input.onclick=function(){
	console.log(arguments[0])
}

获取-对象事件

-------------------------------------------------------------------------------------


事件的属性  ----  event


得到对象事件的属性（鼠标按键）

function getButton(evt){      // 跨浏览器实现
	var e=evt || window.event
	if (evt) {return e.button}
		else if (window.event) {
			switch(e.button){
				case 1 :return 0;
				case 4 :return 1;
				case 2 :return 2;
			}
		}
}

document.onmouseup=function(evt){
	if(getButton(evt)===0){console.log('按下左键')}
		else if(getButton(evt)===1){console.log('按下中键')}
			else if (getButton(evt)===2) {console.log('按下右键')}
}








对象事件（可视区域与屏幕坐标）

document.onclick=function(evt){
	var e=evt||window.event
	console.log(e.clientX+'.'+e.clientY)
	console.log(e.screenX+'.'+e.screenY)
}

clientX/clientY     表示在事件发生的时候鼠标所在的位置-相对与页面视图口来讲不包括滚动被折叠的大小







获得事件触发信息
document.onclick=function(){
	var e=this.target
	console.log(e)
}




兼容获得事件目标DOM对象
function getTarget(evt){
	var e = evt||window.event
	return e.target||e.srcElement
}

document.onclick=function(evt){
	var target=getTarget(evt)
	console.log(target)
}



阻止事件的冒泡

box.onclick=function(e){
	e.cancelBubble = true; -----赋值属性，且只支持IE方法
	e.stopPropagatipn()  -----使用调用方法。符合W3C的规律
}















跨浏览器实现事件处理程序
var Event= {
	add:function(element,type,handler){
		if (element.addEventListener) {element.addEventListener(type,handler,false)}
			else if (element.attachEvent) {element.attachEvent('on'+type,handler)}
				else{element["on"+type]=handler}
	},
	remove:function(element,type,handler){
		if (element.removeEventListener) {element.removeEventListener(type.handler,false)}
			else if (element.detachEvent) {element.detachEvent('on'+type,handler)}
				else{element['on'+type] = null}
	}
}

Event.add(document.getElementById(),'click',alert("xxx"))

