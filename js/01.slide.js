/*************** global init **************/
var $wrapper = $('.wrapper1');
var $slide = $wrapper.find('.slide-wrap');
var $pager = $wrapper.find('.pager');
var interval, n = 1, speed = 2000, aniSpeed = 500, cnt = $slide.find('.slide').length;

/************** user function *************/
function chgPager(el, idx) {
	$(el).removeClass('active');
	$(el).eq(idx).addClass('active');
}

/************** event callback ************/
function onAni() {
	$slide.stop().animate({'left': -n * 100+'%'}, aniSpeed, function() {
		if(n === cnt - 1) {
			$slide.css('left', 0);
			chgPager($pager, 0);
			n = 1;
		}
		else {
			chgPager($pager, n++);
		}
	});
}

function onEnter() {
	clearInterval(interval);
}

function onLeave() {
	interval = setInterval(onAni, speed);
}

function onPagerClick() {
	n = $(this).index();
	onAni();
}

/*************** event init ***************/
interval = setInterval(onAni, speed);
$wrapper.mouseenter(onEnter).mouseleave(onLeave);
$pager.click(onPagerClick);

/*************** start init ***************/

