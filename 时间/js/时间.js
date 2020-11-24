
setInterval(function myfun(){
	
	var t = new Date();
	var hour =t.getHours();
	var minutes = t.getMinutes();
	var seconds = t.getSeconds();
	var time = hour+":"+minutes+":"+seconds;
	if(minutes<10){
		minutes = "0"+minutes;
	}
	if(seconds<10){
		seconds = "0"+seconds;
	}
	document.getElementById("h").innerHTML = hour;
	document.getElementById("m").innerHTML = minutes;
	document.getElementById("s").innerHTML = seconds;
	
},1000);
window.onload = myfun;
