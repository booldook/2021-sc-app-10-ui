/**
 * Event Bubbling
 * event.preventDefault();
 * event.stopPropagation();
 */

/*************** global init **************/


/************** user function *************/


/************** event callback ************/
function onWheel(e) {
	e.preventDefault(); // wheel을 하면 스크롤 되는 기본 기능 막기
	var d = e.deltaY; 	// + 스크롤 내리기, - 스크롤 올리기
	var y = e.pageY; 		// 이벤트가 발생한 지점
	var page = $('section.page');
	var last = page.length - 1;
	var top = [];	// .page들의 offset().top
	var idx = last; 	// 가야될 페이지 idx
	page.each(function(i){ top[i] = $(this).offset().top });
	for(var i=last; i>-1; i--) if(y > top[i]) break; // 어느 페이지에서 휠 했느냐
	if(d > 0) { // 휠을 내리면
		if(i < last) idx = i + 1;
		else idx = last;
	}
	if(d < 0) { // 휠을 올리면
		if(i > 0) idx = i - 1;
		else idx = 0;
	}
	$('html, body').stop().animate({'scrollTop': top[idx]}, 500);
}

function onWrapperClick(e) {
	console.log('wrapper');
	console.log(e.pageX, e.pageY);
}

function onContentWrapClick(e) {
	e.stopPropagation();
	console.log('content-wrap');
}

function onBoxClick(e) {
	e.stopPropagation();
	console.log('box');
}


/*************** event init ***************/
window.addEventListener('wheel', onWheel, { passive: false }); // passive: false; 기본기능막기

$('.wrapper').click(onWrapperClick);
$('.wrapper .content-wrap').click(onContentWrapClick);
$('.wrapper .box').click(onBoxClick);

/*************** start init ***************/

