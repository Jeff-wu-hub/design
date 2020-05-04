entersearch = function(){//回车搜索
	
    varevent =window.event||arguments.callee.caller.arguments[0];
	var text = document.getElementById("text");
	var up = document.getElementById("up");
	var display = document.getElementById("html") ;
	var icon = document.getElementById("btn")
	var baidu = document.getElementById("baidu");
    if(event.keyCode== 13){
		if(text.value =='')
		{alert("你还没有输入内容呢");}
		else{
			up.style.top = "10%";
			document.getElementById("web").src='https://www.baidu.com/s?wd='+text.value;
			display.style.display = "block";
			icon.style.display = "block";
			baidu.style.display = "none";
    	}
		

	
	}
}
var i = 0;
over = function(){	
	var arr = new Array()
	arr[0] ="不搜索算了！口亨！";
	arr[1] = "不搜索滚蛋，别闹！";
	arr[2] = "你是不是闲的？";
	arr[3] = "我真的要生气了！";
	document.getElementById("text").setAttribute("placeholder",arr[i]);
	i++;
	if(i==4){i = 0;}												 
}
minsize = function(){
	var up = document.getElementById("up");
	var baidu = document.getElementById("baidu");
	baidu.style.display = "block";
	var display = document.getElementById("html") ;
	var icon = document.getElementById("btn")
	display.style.display = "none";
	up.style.top = "30%";
	icon.style.display = "none";
}
maxsize = function(){
	var icon = document.getElementById("btn")
		var up = document.getElementById("up");
		var display = document.getElementById("html") ;
		display.style.display = "block";
		up.style.top = "10%";
		icon.style.top = "17%";
	var baidu = document.getElementById("baidu");
	baidu.style.display = "none";
}
down = function(){
	var up = document.getElementById("up");

	var display = document.getElementById("html") ;
	var icon = document.getElementById("btn")
	display.style.display = "none";
	up.style.top = "30%";
	icon.style.top = "80%";
	var baidu = document.getElementById("baidu");
	baidu.style.display = "block";
}
async