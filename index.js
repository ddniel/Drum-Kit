

//Cuando se hace click
for (i = 0; i<7; i++){
	
	document.querySelectorAll("button")[i].addEventListener("click", function (){

	var contenidoDeBoton = this.innerHTML;    // This se refiere a este objeto
	emitirSonido(contenidoDeBoton);
	animarBoton(contenidoDeBoton);
	
});

} 
//Cuando se toca una tecla
document.addEventListener("keypress", function(event){
	
	emitirSonido(event.key);
	animarBoton(event.key);
});

//Funcion para emitir el sonido 
function emitirSonido(claveDeTecla){

	switch(claveDeTecla){
		case "w": 
			var kick = new Audio("sounds/kick-bass.mp3");
			kick.play();
		break;
		case "a": 
			var snare = new Audio("sounds/snare.mp3");
			snare.play();
		break;
		case "s": 
			var crash = new Audio("sounds/crash.mp3");
			crash.play();
		break;
		case "d": 
			var tom1 = new Audio("sounds/tom-1.mp3");
			tom1.play();
		break;
		case "j": 
			var tom2 = new Audio("sounds/tom-2.mp3");
			tom2.play();
		break;
		case "k": 
			var tom3 = new Audio("sounds/tom-3.mp3");
			tom3.play();
		break;
		case "l": 
			var tom4 = new Audio("sounds/tom-4.mp3");
			tom4.play();
		break;


	}
}

//Animacion de botones
function animarBoton(botonActual){
	var botonSeleccionado = document.querySelector("." + botonActual); //porque queremos seleccionar la clase de cada boton: .w
	
	botonSeleccionado.classList.add("pressed");

	setTimeout(function(){botonSeleccionado.classList.remove("pressed")}, 100); //Para agregar un Delay
}




