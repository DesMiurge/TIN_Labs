setTimeout(fun, 5000)

function fun(){
	const para = document.createElement("p");
	para.innerHTML =" xyz ";
	document.body.appendChild(para);

}
