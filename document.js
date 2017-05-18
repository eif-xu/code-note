#  获取节点的方式
1. getElementById()  //获取特定的元素
2. getElementsByName() // 获取所有class
3. getElementsByTagName()  //获取所有标签



#  获取属性的方式
1. getAttribute() //获得特定元素节点属性的值
2. setAttribute() //设置特定元素节点属性的值
3. removeAttribute() //移除元素节点属性的值



#  元素节点的属性，与属性的属性
document.getElementById().tagName   获取元素的元素节点不可以被赋值
document.getElementById().innerHTML  //获取元素中文本节点，可以赋值，立即更改
document.getElementById().id  //可以添加id元素的值
document.getElementById().className  //可以添加元素的样式
document.getElementById().style //可以为元素添加样式
//这条没什么用document.getElementById().getAttribute('id')//与.id效果相同
document.getElementById().setAttribute('id','name')//将节点属性中的id替换成name
document.getElementById().removeAttribute('id')//移除id属性
document.getElementById().attribute  //获取节点所有属性，返回数组



document.getElementsByTagName('*') //获取所有元素


# 对于获取节点的操作  层次节点的选定--用来寻找node

document.getElementById().childNodes //获取所有的子节点
//但是firstChild与lastChild最好应用在选择id上，因为选择class/name/tagName都是数组并不好操作
document.getElementById().firstChild  //获取第一个子元素
document.getElementById().lastChild  //获得最后一个子元素

document.getElementById().parentNode  //获得node的父元素

document.getElementById().previousSibling //获得当前node元素的前一个元素
document.getElementById().nextSibling // 获得当前节点的后一个元素


# 节点的操作

特殊的节点 
document.write() //触发window.open()进行页面的重绘

创造节点
var p=document.createElement('p') //创造新的元素节点
var text=document.createTextNode('xxx')//创造文本节点


插入节点
node.appendChil d(p)  将节点p插入到节点元素的末尾
node.insertBefore(p) 将节点p插入到节点元素的前面


节点的替换
node.replaceChild(newNode,oldNode)
box.replaceChild(box,'p')



节点的复制
var box=document.getElementById('box');
var clone=box.firstChild.cloneNode('')
box.appendChild(clone);
获取第一个子元素，('')表示其中的复制内容



删除指定节点
box.parentNode.removeChild(box)
//将自己删除掉





dom扩展

进行滚动的设置
document.getElementById('').scrollIntoView()
scrollIntoView里面的值是布尔值，默认true，表示滚动使视图顶部与视窗重合
false表示底部与视窗重合


访问元素样式---所有的元素的标签都有stype属性
var box = document.getElementById('p')
box.style.cssFloat.color='red';  //这是w3c的
box.stype.styleFloat.color='red'  //IE的


获取dom元素的大小
1. 得到css的大小
直接通过访问css的属性可以得到
多因素的css的综合结果使用css的计算得到
Var style = window.getComputedStyle?window.getComputedStyle(box.null)||box.currentStyle;
style.width;
style.height;


2. 得到viewport的element的大小
var box=document.getElementById('p');
可视区域的大小
box.clientWidth()
box.clientHeight()

滚动元素的大小
box.scrollWidth()
box.scrollHieght()

返回滚动条的大小
box.offsetWidth()
box.offsetHieght()


元素的位置我的理解就是获得Element然后在周围形成一个盒子

var box=getElementById('box')
box.getBoundingClientRect().top     元素上到   页面上的位置随着页面的移动而变化
box.getBoundingClientRect().left    元素右到   页面的左边的距离
box.getBoundingClientRect().bottom  元素下到   页面上边的距离
box.getBoundingClientRect().right   元素左到   页面页面左边的距离








