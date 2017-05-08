#  获取节点的方式
1. getElementById()  //获取特定的元素
2. getElementsByName() // 获取所有class
3. getElementsByTagName()  //获取所有标签



#  获取属性的方式
1. getAttribute() //获得特定元素节点属性的值
2. setAttribute() //设置特定元素节点属性的值
3. removeAttribute() //移除元素节点属性的值



#  元素节点的属性，与属性的属性
document.getElementById().tagName  // 获取元素的元素节点不可以被赋值
document.getElementById().innerHTML  //获取元素中文本节点，可以赋值，立即更改
document.getElementById().id  //可以添加id元素的值
document.getElementById().className  //可以添加元素的样式
document.getElementById().style //可以为元素添加样式
//这条没什么用document.getElementById().getAttribute('id')//与.id效果相同
document.getElementById().setAttribute('id','name')//将节点属性中的id替换成name
document.getElementById().removeAttribute('id')//移除id属性



document.getElementsByTagName('*') //获取所有元素


# 对于获取节点的操作

document.getElementById().childNodes //获取所有的子节点
