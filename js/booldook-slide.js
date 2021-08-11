function Slide(_parent, _opt) {
	var interval;
	var opt = _opt || {};
	this.wrapper = $(_parent);
	this.wrap = this.wrapper.find('.slide-wrap');
	this.slide = this.wrap.find('.slide');
	this.effect = opt.effect || 'horizontal';
	this.speed = Number(opt.speed) || 500;
	this.autoPlay = opt.autoPlay === false ? false : true;
	this.autoPlaySpeed = Number(opt.autoPlaySpeed) || 3000;
	if(this.effect.toLowerCase() !== 'horizontal' && this.effect.toLowerCase() !== 'vertical' && this.effect.toLowerCase() !== 'fade') {
		this.effect = 'horizontal';
	}
	this.effect += 'Type';
	this.wrap.addClass(this.effect);
	
	/******* init *******/
	if(this.effect === 'fadeType') {
		this.slide.eq(0).clone().appendTo(this.wrap).removeClass('slide'); // Dummy생성(높이생성)
		fadeInit();
	}
	if(this.effect === 'horizontalType') {
		this.slide.eq(0).clone().appendTo(this.wrap);
		this.slide = this.wrap.find('.slide');
		this.wrap.css('width', this.slide.length * 100 + '%');
		this.slide.css('width', 100/this.slide.length.toFixed(4) + '%');
		horiInit();
	}
	if(this.effect === 'verticalType') {
		this.slide.eq(0).clone().appendTo(this.wrapper).removeClass('slide');
		this.slide.eq(0).clone().appendTo(this.wrap);
		this.slide = this.wrap.find('.slide');
		vertInit();
	}
	
	/******* horiInit *******/
	function horiInit() {
		var idx = 0, last = this.slide.length - 1;

		this.wrap.mouseenter(onEnter).mouseleave(onLeave);
		interval = setInterval(onNext, this.autoPlaySpeed);
	}

	/******* fadeInit *******/
	function fadeInit() {
		var idx = 0, last = this.slide.length - 1;

		interval = setInterval(onNext, this.autoPlaySpeed);
	}

	/******* vertInit *******/
	function vertInit() {
		var idx = 0, last = this.slide.length - 1;

		interval = setInterval(onNext, this.autoPlaySpeed);
	}

	/******* ani *******/
	function ani() {

	}

	/******* onEnter *******/
	function onEnter() {
		clearInterval(interval);
	}

	/******* onLeave *******/
	function onLeave() {
		interval = setInterval(onNext, this.autoPlaySpeed);
	}
}

Slide.prototype.onNext = function() {

}

Slide.prototype.onPrev = function() {

}

Slide.prototype.onPager = function() {

}






/* {
	effect: 'horizontal', 'vertical', 'Fade'
	speed: 500,
	autoPlay: true,
	autoPlaySpeed: 3000
} */