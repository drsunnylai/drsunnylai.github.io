const PICTURE_WIDTH = 1000;
const NUM_PICTURES = 4;
let current = 0;

function setDotClass() {
	document.getElementsByClassName("selected")[0].classList.remove("selected");
	document.getElementsByClassName("dot")[current].classList.add("selected");
}

function setImage(index) {
	current = index;
	document.getElementById("images").style.transform = "translateX("+(-(PICTURE_WIDTH * index)) + "px)";
	setDotClass();
}

function left() {
	if (current > 0) setImage(current - 1);
}

function right() {
	if (current < NUM_PICTURES - 1) setImage(current + 1);
}