let imagenes = [
	"imagenes/imag1.jpg",
	"imagenes/imag2.jpg",
	"imagenes/imag3.jpg",
	"imagenes/imag4.jpg",
];

let img = document.getElementById("img");

let order = 0;

function siguiente() {
	if (order + 2 > imagenes.length) {
		order = 0;
	} else {
		order += 1;
	}
	img.src = imagenes[order];
}

function anterior() {
	if (order === 0) {
		order = imagenes.length - 1;
	} else {
		order -= 1;
	}
	img.src = imagenes[order];
}
