/*************** global init **************/
var $wrapper = $('.wrapper1');
var $slide = $wrapper.find('.slide');
var $pager = $wrapper.find('.pager');
var $btPrev = $wrapper.find('.bt-prev');
var $btNext = $wrapper.find('.bt-next');
var interval;			// setInterval을 넣어놓을 변수
var idx = 0;			// animation이 움직일 값의 인자 0, -100%, -200% ...
var gap = 2000;		// setInterval의 간격
var speed = 500;	// animation speed
var depth = 1;		// z-index
var last = $slide.length - 1;		// $('.slide')의 마지막 index

/************** user function *************/
function ani() {
	$slide.eq(idx).css({ 'z-index': ++depth, 'opacity': 0 });
	$slide.eq(idx).stop().animate({'opacity': 1}, speed);
	$pager.removeClass('active');
	$pager.eq(idx).addClass('active');
}

/************** event callback ************/
function onEnter() {
	clearInterval(interval);
}

function onLeave() {
	interval = setInterval(onNext, gap);
}

function onPager() {
	idx = $(this).index();
	ani();
}

function onPrev() {
	idx = idx === 0 ? last : idx - 1;
	ani();
}

function onNext() {
	idx = idx === last ? 0 : idx + 1;
	ani();
}

/*************** event init ***************/
$wrapper.mouseenter(onEnter).mouseleave(onLeave);
$pager.click(onPager);
$btPrev.click(onPrev);
$btNext.click(onNext);

/*************** start init ***************/
interval = setInterval(onNext, gap);

