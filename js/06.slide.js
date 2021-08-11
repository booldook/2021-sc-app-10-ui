var slide = new Slide('#slide1', {
	autoPlay: true,
	effect: 'horizontal',
	autoPlaySpeed: 1000,
	navigation: {
		prev: '.bt-prev',
		next: '.bt-next',
	},
	pagination: {
		el: '.pager'
	},
	speed: 500
});

var slide2 = new Slide('#slide2', {
	autoPlay: true,
	effect: 'vertical',
	autoPlaySpeed: 2000,
	speed: 800,
	navigation: {
		prev: '.bt-prev',
		next: '.bt-next',
	},
	pagination: {
		el: '.pager'
	},
});

var slide3 = new Slide('#slide3', {
	autoPlay: true,
	effect: 'fade',
	autoPlaySpeed: 3000,
	speed: 1000,
	navigation: {
		prev: '.bt-prev',
		next: '.bt-next',
	},
	pagination: {
		el: '.pager'
	},
});


