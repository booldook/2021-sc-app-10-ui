function Slide(_parent, _opt) {
	var interval, last, idx = 0, depth = 1;
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


	/******* horiInit *******/
	var horiInit = function () {
		last = this.slide.length - 1;

		this.wrap.mouseenter(onEnter).mouseleave(onLeave);
		interval = setInterval(this.onNext, this.autoPlaySpeed);
	}.bind(this);

	/******* fadeInit *******/
	var fadeInit = function () {
		last = this.slide.length - 1;

		this.wrap.mouseenter(onEnter).mouseleave(onLeave);
		interval = setInterval(this.onNext, this.autoPlaySpeed);
	}.bind(this);

	/******* vertInit *******/
	var vertInit = function () {
		last = this.slide.length - 1;

		this.wrap.mouseenter(onEnter).mouseleave(onLeave);
		interval = setInterval(this.onNext, this.autoPlaySpeed);
	}.bind(this);

	/******* ani *******/
	var ani = function () {
		switch(this.effect) {
			case 'horizontalType':
				this.wrap.stop().animate({ 'left': -idx * 100 + '%' }, this.speed);

				break;
			case 'verticalType':
				this.wrap.stop().animate({ 'top': -idx * 100 + '%' }, this.speed);

				break;
			case 'fadeType':
				this.slide.eq(idx).css({ 'z-index': ++depth, 'opacity': 0 });
				this.slide.eq(idx).stop().animate({'opacity': 1}, this.speed);

				break;
		}
	}.bind(this);

	/******* onEnter *******/
	function onEnter() {
		clearInterval(interval);
	}

	/******* onLeave *******/
	function onLeave() {
		interval = setInterval(this.onNext, this.autoPlaySpeed);
	}
	
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
}

Slide.prototype.onNext = function() {
	if(this.effect === 'fadeType') {
		idx = idx === last ? 0 : idx + 1;
	}
	else {
		if(idx === last) {
			this.wrap.css('left', 0);
			idx = 0;
		}
		idx++;
	}
	ani();
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