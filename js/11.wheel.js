/**
 * Event Bubbling
 * event.preventDefault();
 * event.stopPropagation();
 */

/*************** global init **************/


/************** user function *************/


/************** event callback ************/
function onWheel(e) {
	e.preventDefault();
}

function onWrapperClick(e) {
	console.log('wrapper');
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
window.addEventListener('wheel', onWheel, { passive: false });

$('.wrapper').click(onWrapperClick);
$('.wrapper .content-wrap').click(onContentWrapClick);
$('.wrapper .box').click(onBoxClick);

/*************** start init ***************/

