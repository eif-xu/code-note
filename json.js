//json的实例
//json就是一堆可以传输的字符串，结构性的数据
//json适合做数据量大，不要求进行加密的数据串，如果要进行加密传输，请使用serialize
//php进行操作json的方法1：加密2：解密

json(javascript objet notation)对象的字面量的表达式
键值可以是标识符，字符串，数值 。属性值可以是任意的值
{ x: 2, y: 1 }          //属性名是标示符，只有JSON里可以使用，等价于字符串
{ "x": 2, "y": 1 }      //属性名是字符串
{ 'x': 2, 'y': 1 }      //属性名是字符串
{ 2: 1, 1: 2}           //属性名是数值
{ x: 2, status: true, info: { name: "Tom", age: 23, student: false} }   //属性值包含对象
{ x: 2, say_hello: function(){ console.log( "Hello!" ) } }              //属性值包含函数
//像上面这种没有函数名的函数叫做"匿名函数"

