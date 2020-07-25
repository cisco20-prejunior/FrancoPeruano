let imagenes = [
	"imagenes/imag1.jpg",
	"imagenes/imag2.jpg",
	"imagenes/imag3.jpg",
	"imagenes/imag4.jpg",
];

let imagen = document.getElementById("img1");
let preIm = document.getElementById("img2");
let postIm = document.getElementById("img3");
let order = 0;

function siguiente() {
	if (order === 0) {
		order = imagenes.length - 1;
	} else {
		order -= 1;
	}
	postIm.src = imagenes[order];
	imagen.className = "img1";
	postIm.className = "img1";
	function cambio() {
		imagen.src = postIm.src;
		imagen.className = "";
		postIm.className = "";
	}
	setTimeout(cambio, 850);
}

function anterior() {
	if (order + 2 > imagenes.length) {
		order = 0;
	} else {
		order += 1;
	}
	preIm.src = imagenes[order];
	imagen.className = "img3";
	preIm.className = "img3";
	function seguir() {
		imagen.src = preIm.src;
		imagen.className = "";
		preIm.className = "";
	}
	setTimeout(seguir, 850);
}

addEventListener("scroll", () => {
	let services = document.getElementsByClassName("servicio-ind");
	for (let i = 0; i < services.length; i++) {
		let clase = services[i].classList.contains("animate__animated");
		let distancia = Math.round(services[i].getBoundingClientRect().top);

		if (screen.width <= 900) {
			if (distancia < 750 && !clase) {
				services[i].className += " animate__animated animate__fadeInLeft";
			}
		} else {
			if (distancia < 750 && !clase) {
				services[i].className += " animate__animated animate__fadeInUp";
			}
		}
	}
});
