var http = require('http');
var serverAdress = "127.0.0.1";
var serverPort=8000;
var server = http.createServer(function (request,response){
	let reqURL = String(request.url).match(
	/(add||sub||div||mul){1}\?([a-zA-Z]=\d&)*([a-zA-Z]=\d){1}/
	);
	
	response.writeHead(200,{"Content-Type": "text/plain"});
	if(reqURL){
		let address ="https://"+ serverAdress+":"+serverPort+request.url;
		let a = new URL(address);
		if(request.url.substring(0,4)=="/add"){
			let result = 0;
			let resultSTR = "";
			for (const [index, element] of a.searchParams) {
				resultSTR+=element+" + "
				result += parseInt(element);
			}
			resultSTR = resultSTR.substring(0, resultSTR.length - 3);
			resultSTR+=" = "
			response.end(resultSTR + result);
		}
		else if(request.url.substring(0,4)=="/sub"){
			let flag = true;
			let result = 0;
			let resultSTR = "";
			for (const [index, element] of a.searchParams) {
				resultSTR+=element+" - "
				result -= parseInt(element);
				if(flag){
					result= parseInt(element);
					flag=false;
				}
				
			}
			resultSTR = resultSTR.substring(0, resultSTR.length - 3);
			resultSTR+=" = "
			response.end(resultSTR + result);
		}
		else if(request.url.substring(0,4)=="/mul"){
			let result = 1;
			let resultSTR = "";
			for (const [index, element] of a.searchParams) {
				resultSTR+=element+" * "
				result *= parseInt(element);
			}
			resultSTR = resultSTR.substring(0, resultSTR.length - 3);
			resultSTR+=" = "
			response.end(resultSTR + result);
		}
		else if(request.url.substring(0,4)=="/div"){
			let flag = true;
			let result = 1;
			let resultSTR = "";
			for (const [index, element] of a.searchParams) {
				resultSTR+=element+" / "
				result /= parseInt(element);
				if(flag){
					result= parseInt(element);
					flag=false;
				}
				
			}
			resultSTR = resultSTR.substring(0, resultSTR.length - 3);
			resultSTR+=" = "
			response.end(resultSTR + result);
		}
	}

	
	
});
server.listen(serverPort,serverAdress);
console.log("Server listening at http://"+serverAdress+":"+serverPort+"/");