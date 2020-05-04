	var a;
	var b;
	var c;
	var d;
com = function(obj){
	if(obj.value == "AC"||obj.value == "and"||obj.value=="sub"||obj.value == "divi"||obj.value=="time"||obj.value =="A" ||obj.value =="%"||obj.value=="."||obj.value=="=")
	{
		if(obj.value=="and"){
		a = document.getElementById("ans").textContent;
		document.getElementById("ans").innerHTML += "+";
		document.getElementById("comp").innerHTML = document.getElementById("ans").textContent;
		document.getElementById("ans").innerHTML="";
		d = 'and';
		}
		if(obj.value=="sub"){
		a = document.getElementById("ans").textContent;
		document.getElementById("ans").innerHTML += "-";
		document.getElementById("comp").innerHTML = document.getElementById("ans").textContent;
		document.getElementById("ans").innerHTML="";
		d = 'sub';
		}
		if(obj.value=="time"){
		a = document.getElementById("ans").textContent;
		document.getElementById("ans").innerHTML += "x";
		document.getElementById("comp").innerHTML = document.getElementById("ans").textContent;
		document.getElementById("ans").innerHTML="";
		d = 'time';
		}
		if(obj.value=="divi"){
		a = document.getElementById("ans").textContent;
		document.getElementById("ans").innerHTML += "÷";
		document.getElementById("comp").innerHTML = document.getElementById("ans").textContent;
		document.getElementById("ans").innerHTML="";
		d = 'divi';
		}
		
		
		if(obj.value=="AC"){
			document.getElementById("comp").innerHTML="";
			document.getElementById("ans").innerHTML="";
		}
		
		if(obj.value=="A"){
			
	
			document.getElementById("ans").innerHTML = "-"+ document.getElementById("ans").innerHTML;
			a = document.getElementById("ans").textContent;
			document.getElementById("ans").innerHTML = a;
	
		}
		
		if(obj.value=="%"){
			a = document.getElementById("ans").textContent;
			a = Number(a)/100;
			document.getElementById("ans").innerHTML = a;
		}
		if(obj.value=='.'){
			
			a = document.getElementById("ans").textContent+=".";
			document.getElementById("ans").innerHTML = a;
			
		}
		if(obj.value==''){
			
			a = document.getElementById("ans").textContent+=".";
			document.getElementById("ans").innerHTML = a;
			
		}
		
		
		
		
		
		
		if(obj.value=="="){
			if(d=='and'){
			b = document.getElementById("ans").textContent;
			c =Number(a)+Number(b);
			document.getElementById("comp").innerHTML += document.getElementById("ans").textContent;
			document.getElementById("ans").innerHTML = c;
			}
			if(d=='sub'){
			b = document.getElementById("ans").textContent;
			c =Number(a)-Number(b);
			document.getElementById("comp").innerHTML += document.getElementById("ans").textContent;
			document.getElementById("ans").innerHTML = c;}
			if(d=='time'){
			b = document.getElementById("ans").textContent;
			c =Number(a)*Number(b);
			document.getElementById("comp").innerHTML += document.getElementById("ans").textContent;
			document.getElementById("ans").innerHTML = c;}
			if(d=='divi'){
			b = document.getElementById("ans").textContent;
			c =Number(a)/Number(b);
			document.getElementById("comp").innerHTML += document.getElementById("ans").textContent;
			document.getElementById("ans").innerHTML = c;}
		}
	}
	else{
	var a1 = obj.value ;
	document.getElementById("ans").innerHTML += a1;
	}
	
}
	
	
	
	
	
	
	