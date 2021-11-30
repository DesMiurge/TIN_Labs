
window.onload = function(){
	
	function checkCorrectness(){
		let validity = true;
		
		if(document.getElementById("Regular")!=null){
			
			let test = document.getElementById("Numerical").value;
			if(!isNaN(test)){
				console.log("Numerical condition passed");
				document.getElementById("Numerical").style.border = "thick solid green";
				document.getElementById("Numerical").value = +test;
			}else{
				console.log("Numerical condition failed");
				document.getElementById("Numerical").style.border = "thick solid red";
				validity=false;
			}
				
		}
		if(document.getElementById("Numerical")!=null){
			
			let test = String(document.getElementById("Regular").value)
			.toLowerCase()
			.match(
			  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
			if(test){
				console.log("Regex condition passed");
				document.getElementById("Regular").style.border = "thick solid green";
			}else{
				console.log("Regex condition failed");
				document.getElementById("Regular").style.border = "thick solid red";
				validity=false;
			}
				
		}
		
		
		return validity;
	}
	document.getElementById("button").addEventListener("click",function(event){


		if(checkCorrectness()){
			console.log("Form passed validation");
		}else{
			console.log("Form did not pass validation");
		}
		
		
		event.preventDefault();
	});

}