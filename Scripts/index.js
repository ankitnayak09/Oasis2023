/////////////// TIMER ANIMATION

const bosm = new Date("October 13, 2022 23:59:59").getTime();
let prev_day, prev_hr, prev_min, prev_sec;
let days, hrs, min, sec;
let temp = 0;
const vp = window.matchMedia("(max-width: 800px)");

// if (vp.matches) {
// 	document.querySelector("#dir-para-1").innerHTML = `
//     After two long years, the Sports Council of BITS Pilani is organizing its 35th annual BOSM (BITS Open Sports
//     Meet) from the 14th to the 18th of October. A platform for the students to display their talent by competing
//     against the best players across the country, I am sure the participants are ready to experience the event's
//     thrill, excitement, and adrenaline rush.`;

// 	document.querySelector("#dir-para-2").style.display = "none";
// }

////////// RANDOM STARS

// let stars = "";
// const sc_factor = Math.random() * 0.1 + 0.25;
// let height = window.innerHeight;
// let width = window.innerWidth;
// let star_count = (height * width * sc_factor) / 1000;

// const add_stars = () => {
//   stars = "";
//   for (let i = 0; i < star_count; i++) {
//     let class_int = Math.random();
//     let offset_x = Math.random() * 1;
//     let offset_y = Math.random() * 1;

//     if (class_int < 0.5) {
//       stars = `${stars}\n
//       <div class="star-type1 star" style="left: ${offset_x * width}px; top: ${
//         offset_y * height
//       }px"></div>`;
//     } else {
//       stars = `${stars}\n
//       <div class="star-type2 star" style="left: ${offset_x * width}px; top: ${
//         offset_y * height
//       }px"></div>`;
//     }
//   }
//   stars_cont.innerHTML = stars;
// };

// add_stars();

////////// AUDIO FILES

// let sound = new Audio("Assets/switchsound.mp3");

// function flicker() {
// 	sound.volume = 0.3;
// 	sound.playbackRate = 1.3;
// 	sound.play();
// }

////////// LINES Transform

// const lines = document.getElementsByClassName('lines')
// let scroll = window.pageYOffset;
// let rate = (scroll * 0.5) - 750;
// lines[0].style.transform = 'translate3d(0px,' + rate + 'px,0px)';
// document.addEventListener('scroll', () => {
//   lines[0].style.transform = 'translate3d(0px,' + rate + 'px,0px)';
// })

////////// CONTACT POP-UP

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

////////// HAMBURGER EVENTS

// let open = false;
// const right = document.querySelector(".right");

// const hamImg = document.querySelector(".ham-img span");
// const hamText = document.querySelector(".ham-text span");
// const hamLogoImg = document.querySelector(".ham-logo img");

// const hamGrid = document.querySelector(".ham-grid");
// const hamLogo = document.querySelector(".ham-logo");
// const hamIcons = document.querySelector(".ham-icons");
// const hamLinks = document.querySelector(".ham-links");

// const hamIcon = document.querySelectorAll(".ham-icon");
// const hamLine = document.querySelectorAll(".hamburger span");
// const hamLink = document.querySelectorAll(".ham-links div a");

// document.querySelector(".hamburger").addEventListener("click", () => {
//   if (!open) {
//     // hamburger menu opens
//     open = true;
//     hamGrid.style.display = "grid";
//     body.style.overflowY = "hidden";

//     // links disappear
//     for (let i = 1; i <= 4; i++) hamLink[i - 1].style.opacity = 0;

//     // right nav position
//     right.style.position = "fixed";
//     right.style.top = "0rem";
//     right.style.right = "0";

//     // opening animations
//     hamImg.style.animation = "span-right 0.45s linear";
//     hamText.style.animation = "span-left 0.45s linear";
//     hamLogo.style.animation = "come-up 0.45s linear";
//     hamIcons.style.animation = "come-down 0.45s linear";
//     hamLinks.style.animation = "come-up 0.45s linear";

//     // links appear
//     for (let i = 1; i <= 4; i++) {
//       hamLink[i - 1].style.animation = `link-up 0.2s linear 0.45s`;
//       setTimeout(() => {
//         hamLink[i - 1].style.opacity = 1;
//       }, 605);
//     }

//     // icons appear
//     hamIcon[0].style.animation = `link-up 0.2s linear 0.45s`;
//     hamIcon[1].style.animation = `link-up 0.2s linear 0.45s`;
//     hamLogoImg.style.animation = `link-up 0.2s linear 0.45s`;

//     setTimeout(() => {
//       hamIcon[0].style.opacity = 1;
//       hamIcon[1].style.opacity = 1;
//       hamLogoImg.style.opacity = 1;
//     }, 500);

//     // hamburger animations
//     hamLine[0].style.animation = "ham-up-1 0.15s linear";
//     hamLine[1].style.opacity = 0;
//     hamLine[2].style.animation = "ham-down-1 0.15s linear";

//     setTimeout(() => {
//       hamLine[2].style.width = "25px";
//       hamLine[2].style.top = "13.2px";
//       hamLine[2].style.transform = "rotate(-405deg)";

//       hamLine[0].style.width = "25px";
//       hamLine[0].style.top = "13.2px";
//       hamLine[0].style.transform = "rotate(405deg)";
//     }, 150);
//   } else {
//     // hamburger menu closes
//     open = false;
//     setTimeout(() => {
//       hamGrid.style.display = "none";
//       body.style.overflowY = "scroll";
//     }, 500);

//     // right nav position
//     right.style.position = "relative";
//     right.style.top = "0";
//     right.style.right = "0";

//     // closing animations
//     hamImg.style.animation = "span-go-right 0.5s linear";
//     hamText.style.animation = "span-go-left 0.5s linear";
//     hamLogo.style.animation = "go-down 0.5s linear";
//     hamIcons.style.animation = "go-up 0.5s linear";
//     hamLinks.style.animation = "go-down 0.5s linear";

//     // links disappear
//     for (let i = 1; i <= 4; i++) hamLink[i - 1].style.opacity = 0;

//     // icons disappear
//     hamIcon[0].style.opacity = 0;
//     hamIcon[1].style.opacity = 0;
//     hamLogoImg.style.opacity = 0;

//     // hamburger animations
//     hamLine[0].style.animation = "ham-up-2 0.15s linear";
//     hamLine[1].style.opacity = 1;
//     hamLine[2].style.animation = "ham-down-2 0.15s linear";

//     setTimeout(() => {
//       hamLine[2].style.width = "13px";
//       hamLine[2].style.top = "25.4px";
//       hamLine[2].style.transform = "none";

//       hamLine[0].style.width = "35px";
//       hamLine[0].style.top = "1px";
//       hamLine[0].style.transform = "none";
//     }, 150);
//   }
// });

////////// SIDEBAR NAVIGATION

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
// let offsets = [];
// headers.forEach((e) => {
//   offsets.push(e.offsetTop);
// });
// console.log(offsets);
// console.log(offsets);
// let offset = 0;
// setInterval(() => {
//   offset = window.pageYOffset;
// }, 50);

// document.addEventListener("scroll", (e) => {
//   let y = window.pageYOffset
//   console.log(y);
//     if(y>offset){
//       setTimeout(() => {
//         if (y > 200 && y < 700) {
//           window.scrollTo(0, offsets[1])
//         }
//         else if (y > 900 && y < 1600) {
//           window.scrollTo(0, offsets[2])
//         }
//         else if (y > 1800 && y < 2297) {
//           window.scrollTo(0, offsets[3]+300)
//         }
//       }, 600);
//     }
//     else{
//       setTimeout(() => {
//         if (y > 200 && y < 700) {
//           window.scrollTo(0, 0)
//         }
//         else if (y > 900 && y < 1600) {
//           window.scrollTo(0, offsets[1])
//         }
//         else if (y > 1800 && y < 2297) {
//           window.scrollTo(0, offsets[2])
//         }
//       }, 600);
//     }

// })
// [176, 872, 1740, 2321]
// 176
// 1: 848
// 2: 1716
// 3: 2297
