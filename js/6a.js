window.onload = function(){
	document.getElementById("button").addEventListener("click",function(event){
		let c = document.getElementById("Celsius").value;
		document.getElementById('Fahrenheit').innerHTML = c*1.8+32;
		event.preventDefault();
	});
	
}

