
window.onload = function(){
	

	document.getElementById("button").addEventListener("click",function(event){

		var table = document.getElementById("myTable");
		let test = document.getElementById("Numerical").value;
		var row = table.insertRow(table.rows.length);
		
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		cell1.innerHTML = document.getElementById("Numerical").value;
		cell2.innerHTML = document.getElementById("Regular").value;
		
		event.preventDefault();
	});
	


}