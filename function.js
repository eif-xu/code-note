 /* function型，作为 对象 返回

 function a(){return a=1};
 //console.log(typeof(a))

 var d=function(){
 	return a;
 }
 d();

 console.log(a)
 *
 */

 //作为对象必然会有属性--常见属性arguments
 // function box(){
 // 	return arguments.length;
 // }
 // console.log(box(1,2,3,4))

// var a=[]
// for(var k=0;k<10000;k++){
// 	a[k]=k;
// }
// console.log(a.length);




//console.time('定时器1');
 // function box(){
 // 	var sum=0;
 // 	if (arguments.length===0){return '输入大于0'}
 // 	for (var i=0;i<arguments.length;i++) {
 // 		sum+=arguments[i]
 // 	}
 // 	return sum;
 // }
 //console.log(box(a))
 //console.timeEnd('定时器1');


//console.time('定时器2')
 // function box2(){
 // 	var sum2=0;
 // 	var i=0;
 // 	if (arguments.length===0){return '输入大于0'}
 // 	for(var i in arguments){
 // 		sum2+=arguments[i];
 // 	}
 // 	return sum2;
 // }
 //console.log(box2(a));
 // console.timeEnd('定时器2');



// this相当于指针，指向函数执行域，this相当于上一级对象
//window.color='red';
//console.log(this.color);

// var box={
// 	color:'lanse',
// 	printcolor: function(){
// 		return this.color
// 	}
// }
// console.log(box.printcolor())
// function box(num1,num2){
// 	return num1+num2;
// }
// function box2(num1,num2){
// 	return box.apply(this,arguments)
// }
//console.log(box2(10,15))

// var box='sole'
// console.log(box instanceof String)


// function box(obj){
// 	obj.name='les';
// 	var obj.name='no';
// }
// console.log(obj.name);


// var box='jhl';
// function setbox(){
// 	function setbox2(){
// 		var b='dsa';
// 		console.log(box);
// 	}
// 	console.log(b)
// }
// setbox();
//console.log(b)
// for(var i=0;i<=5;i++){
// 	if(true){
// 		var num1=1,num2=0;
// 		num1+=num2;
// 	}
// }
// console.log(num1);


// console.log(Math.random()*100)

this一定是在function运行时进行赋值

apply()，第二个参数既传入实际参数，一定要用[].



