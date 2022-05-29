let count = 0;

document.getElementById("incrementar").addEventListener("click", incrementar);
document.getElementById("decrementar").addEventListener("click", decrementar);

function incrementar(){
	count++;
	document.getElementById("incrementar").innerHTML = count;
}

function decrementar(){
	count--;
	document.getElementById("decrementar").innerHTML = count;
}