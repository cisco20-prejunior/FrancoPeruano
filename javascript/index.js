let btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');

window.addEventListener('load', () =>{
	overlay.classList.add('active');
	popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});

addEventListener("scroll", () => {
	// animaciones de los servicios en la parte inferios del index
	let services = document.getElementsByClassName("servicio-ind");
	for (let i = 0; i < services.length; i++) {
		let clase = services[i].classList.contains("animate__animated");
		let distancia = Math.round(services[i].getBoundingClientRect().top);
		if (screen.width <= 900) {
			if (distancia < 850 && !clase) {
				services[i].className += " animate__animated animate__fadeInLeft";
			}
		} else {
			if (distancia < 800 && !clase) {
				services[i].className += " animate__animated animate__fadeInUp";
			}
		}
	}
});

