// 封装
// var Book = function(name){
// this.name = name;
// }
// Book.prototype.getName = function(){console.log(this.name)}

// var TechBook = function(name){
// Book.call(this, name);
// }
// TechBook.prototype = new Book(); 

// var tb = new TechBook('js');
// tb.getName();





// function SuperRobot(data) {
//     var say = function() { return "Hello World!"; };
//     say.prototype.age=data.age;
//     console.log(say.age)
//     return say;
// }
// console.log(super_robot.age)




//一样的方法与属性都放在原型中，不同的属性与方法写到构造函数中





// 关于非构造函数实现继承
// var chinese={nation:'中国'}
// function ob(o){
// 	var f=function(){};
// 	f.prototype=o;
// 	return new f();
// }
// var Doctor=ob(chinese);
// Doctor.career='医生';
// console.log(Doctor.nation)










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




