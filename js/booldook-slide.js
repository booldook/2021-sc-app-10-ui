function Slide(_parent, _opt) {
	var opt = _opt || {};
	this.parent = _parent;
	this.effect = opt.effect || 'horizontal';
	this.speed = opt.speed || 500;
	this.autoPlay = opt.autoPlay || true;
	this.autoPlaySpeed = opt.autoPlaySpeed || 3000;
	console.log(this.effect);
}

/* {
	effect: 'horizontal', 'vertical', 'fade'
	speed: 500,
	autoPlay: true,
	autoPlaySpeed: 3000
} */