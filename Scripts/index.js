/////////////// TIMER ANIMATION

const bosm = new Date("October 13, 2022 23:59:59").getTime();
let prev_day, prev_hr, prev_min, prev_sec;
let days, hrs, min, sec;
let temp = 0;
const vp = window.matchMedia("(max-width: 800px)");

const texts = document.querySelectorAll(".number");
const mails = document.querySelectorAll(".mail");
const copied = document.getElementById("copied");
const textarea = document.createElement("textarea");

texts.forEach((text) => {
	text.addEventListener("click", () => {
		copyText(text);
	});
});

mails.forEach((text) => {
	text.addEventListener("click", () => {
		copyText(text);
	});
});

function copyText(text) {
	console.log(text);

	// copied.style.transform = `translateY(${})`
	textarea.setAttribute("readonly", "");
	textarea.style.position = "absolute";
	textarea.style.opacity = 0;
	textarea.style.pointerEvents = "none";
	textarea.value = text.innerText;

	document.body.appendChild(textarea);
	navigator.clipboard.writeText(textarea.value);
	textarea.select();

	setTimeout(() => {
		copied.style.opacity = 0;
	}, 1000);
}

const sideScroll = document.getElementById("sideScroll");
scrollElems = Array.from(document.getElementsByClassName("navBut"));

sideScroll.addEventListener("click", (e) => {
	scrollElems.forEach((element) => {
		if (element.classList.contains("active")) {
			element.classList.remove("active");
		}
	});
	e.target.classList.add("active");
});

const headers = Array.from(document.getElementsByClassName("sec-head"));
let rate = 0.087;
document.addEventListener("scroll", (e) => {
	let windowHeight = window.innerHeight;
	let y = window.pageYOffset;
	let scrolled = -y * rate + "px";
	sideScroll.style.setProperty("--sideScroll", scrolled);
});
// HamburgerEvents
let menuBtn = document.querySelector("#menuBtn");
let menuLinks = document.querySelectorAll(".menu_overlay ul li a");

menuBtn.addEventListener("click", () => {
	if (menuBtn.checked) {
		document.querySelector("body").style.overflowY = "hidden";
	} else {
		document.querySelector("body").style.overflowY = "auto";
	}
});

menuLinks.forEach((link) => {
	link.addEventListener("click", () => {
		menuBtn.checked = false;
		document.querySelector("body").style.overflowY = "auto";
	});
});
