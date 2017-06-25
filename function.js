 封装
 var Book = function(name){
 this.name = name;
 }
 Book.prototype.getName = function(){console.log(this.name)}

 var TechBook = function(name){
 Book.call(this, name);
 }
 TechBook.prototype = new Book(); 

 var tb = new TechBook('js');
 tb.getName();





 function SuperRobot(data) {
     var say = function() { return "Hello World!"; };
     say.prototype.age=data.age;
     console.log(say.age)
     return say;
 }
 console.log(super_robot.age)




一样的方法与属性都放在原型中，不同的属性与方法写到构造函数中





 关于非构造函数实现继承
 var chinese={nation:'中国'}
 function ob(o){
 	var f=function(){};
 	f.prototype=o;
 	return new f();
 }
 var Doctor=ob(chinese);
 Doctor.career='医生';
 console.log(Doctor.nation)










// ajax的回调函数的使用
// function fn(url, callback){
//     var httpRequest;　　　　        //创建XHR
//     httpRequest = window.XMLHttpRequest ? new XMLHttpRequest() : window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : undefined;//针对IE进行功能性检测

//     httpRequest.onreadystatechange = function(){
//       if(httpRequest.readystate === 4
//                 && httpRequest.status === 200){　　//状态判断
//           callback.call(httpRequest.responseXML);
//        }
//     };
//     httpRequest.open("GET", url);
//     httpRequest.send();
// }

// fn("http://www.codefordream.com/ajax_data.xml", function(){　　　　//调用函数
//    console.log("content:"+this); 　　//此语句后输出
// });

// console.log("this will run before the above callback.")




var box=new Object;
box.name='xx';
box.age=12;
box.run=function(){return this.name+this.age}
console.log(box.run())





构造函数法改进于工厂模式
function Box(name,age){
	this.name=name;
	this.age=age;
	this.run=function(){return '名字'+this.name+'年龄'+this.age}
}

var box1= new Box('hgj',3);
var box2= new Box('qwe',32);

console.log(box1.run())
console.log(box2.run())



 function Box(){};
 Box.prototype.name='xxx';
 Box.prototype.age=12;

 var box1=new Box;
 console.log(box1.name);




 动态原型模式
function Box(name,age){
	this.name=name;
	this.age=age;

	if(typeof(this.run)!='function'){
		Box.prototype.run=function(){return this.name+this.age+'运行中'}
	}
}
var box=new Box('xxx',12);
console.log(box.run())




寄生构造模式        =工厂模式+构造函数模式

function Box(name,age){
	var obj=new Object();
	obj.name=name;
	obj.age=age;
	obj.run=function(){
		return this.name+'运行中' 
	}
	return obj
}
var box1=new Box('21',43)

