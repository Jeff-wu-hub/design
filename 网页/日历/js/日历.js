function myfun(){
	var t =new Date();
	var year = t.getFullYear();//年
	var month = t.getMonth()+1;//月份
	var week = t.getDay();//星期
	var day = t.getDate();//日
	var arr =  new Array()
		arr[0] = "星期日"; 
		arr[1] = "星期一"; 
		arr[2] = "星期二"; 
		arr[3] = "星期三"; 
		arr[4] = "星期四"; 
		arr[5] = "星期五"; 
		arr[6] = "星期六"; 
	var w= arr[week];
	var date = year+"."+month;
	document.getElementById("ym").innerHTML = date;
	document.getElementById("date").innerHTML = day;
	document.getElementById("week").innerHTML = w;
}
















window.onload = myfun;