// tu codigo va aca
function callbackPromedio (a,b,c,callback){
	var suma = a + b + c;
    var promedio = suma / 3;
    return callback (promedio);
}
function segundero (){
document.getElementById("titulo").innerHTML = 1;
	setInterval (function (){
		var segundos = parseInt (document.getElementById("titulo").innerHTML);
		document.getElementById("titulo").innerHTML = segundos + 1;
}, 1000);
}