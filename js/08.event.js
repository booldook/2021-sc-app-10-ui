/**
 * scroll, wheel, resize
 * 
 */

/*************** global init **************/


/************** user function *************/


/************** event callback ************/
function onScroll(e) {
	// console.log(e);
	// console.log(window.scrollY);			// js 
	// console.log($(this).scrollTop());	// jQuery
}

function onWheel(e) {
	// console.log(e.deltaY); // ie, chrome, ff -> +(내리고) -(올리고), opera(부호 반대)
	console.log(e.originalEvent.deltaY); // jQuery
}

function onResize(e) {
	console.log(e);
	console.log( window.innerWidth );
	console.log($(this).width());
	console.log($(this).innerWidth());
	console.log($(this).outerWidth());
	console.log($(this).outerWidth(true));
}


/*************** event init ***************/
// window.addEventListener('scroll', onScroll);
$(window).scroll(onScroll);

// window.addEventListener('wheel', onWheel);
// $(window).on('wheel', onWheel);

// window.addEventListener('resize', onResize);
$(window).resize(onResize);


/*************** start init ***************/

