/*************** global init **************/
var $slide = $('.wrapper1 .slide-wrap');
var interval, n = 1, cnt = $slide.find('.slide').length;

/************** user function *************/


/************** event callback ************/
function onSet() {
	$slide.stop().animate({'left': -(n * 100)+'%'}, 1000, function() {
		++n
	});
}

/*************** event init ***************/
interval = setInterval(onSet, 3000);

/*************** start init ***************/

