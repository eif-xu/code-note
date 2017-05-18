适时的时候加载js脚本--动态脚本加载

var falg=true;
if (falg) {loadscript('xxx.js')}
function loadscript(url){
	var box=document.createElement('script')
	box.type='test/javascript'
	box.src=url;
	document.getElementsByTagName('head')[0].appendChild(box)
}

var falgg=true;
if (falgg){looascript('xxx.css')}
function looascript(url){
	var box = document.createElement('link')
	box.type='test/css'
	box.href=url;
	document.getElementsByTagName('head')[0].appendChild(box)
}