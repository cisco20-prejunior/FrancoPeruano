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

window.addEventListener("load", function () {
	new Glider(document.querySelector(".carousel__lista"), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: ".carousel__indicadores",
		duration: 1,
		arrows: {
			prev: ".carousel__anterior",
			next: ".carousel__siguiente",
		},
		responsive: [
			{
				// screens greater than >= 775px
				breakpoint: 450,
				settings: {
					// Set to `auto` and provide item width to adjust to viewport
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				// screens greater than >= 1024px
				breakpoint: 800,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
				},
			},
			{
				// screens greater than >= 1024px
				breakpoint: 200,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});
});