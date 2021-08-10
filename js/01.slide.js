/*************** global init **************/
var $wrapper = $('.wrapper1');
var $slide = $wrapper.find('.slide-wrap');
var $pager = $wrapper.find('.pager');
var $btPrev = $wrapper.find('.bt-prev');
var $btNext = $wrapper.find('.bt-next');
var interval, idx = 0, gap = 2000, speed = 500, last = $slide.find('.slide').length - 1;

/************** user function *************/
function ani(slideEl, pagerEl, speed, idx) {
	
}

/************** event callback ************/


/*************** event init ***************/
interval = setInterval(onInterval, gap);
$wrapper.mouseenter(onEnter).mouseleave(onLeave);
$pager.click(onPagerClick);
$btPrev.click(onPrev);
$btNext.click(onNext);

/*************** start init ***************/

