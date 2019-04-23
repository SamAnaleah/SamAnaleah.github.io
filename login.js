function login(){

	var username= document.getElementById("name").value;
	var pass=document.getElementById("pin").value;
	
	if (username == "admin" && pass== "pass123"){
	var encoded="";	
    for (i=0; i<pass.length;i++) {
        var a = pass.charCodeAt(i);
        var b = a ^ pass;   
        encoded = encoded+String.fromCharCode(b);
    }
	var match="pass123"; 
	if (encoded == match){
		window.open("userHome.html"); 
	}
   
}
	else {
		for (i=0; i<pass.length;i++) {
        var a = pass.charCodeAt(i);
        var b = a ^ 1234;   
        encoded = encoded+String.fromCharCode(b);
		}
		console.log("Access Token:");
		console.log(encoded);
	window.open("https://sleepy-gorge-71855.herokuapp.com/loggedIn"); 
	}
}
