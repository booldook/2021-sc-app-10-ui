var swiper = new Swiper(".my-swiper", {
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		// dynamicBullets: true,
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

var swiper2 = new Swiper(".my-swiper2", {
	loop: true,
	effect: "fade",
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

var swiper3 = new Swiper(".my-swiper3", {
	loop: true,
	direction: "vertical",
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});