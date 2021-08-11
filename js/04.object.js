function Box(_parent, _width, _height, _color) { // 생성자 객체
	this.parent = _parent;
	this.width = _width;
	this.height = _height;
	this.color = _color;
}

Box.prototype.init = function() {
	var style = 'width: '+this.width+'; ';
	style += 'height: '+this.height+'; ';
	style += 'background-color: '+this.color+'; ';
	style += 'transition: all 0.5s; ';
	var html = '<div class="box" style="'+style+'"></div>';
	// document.querySelector(this.parent).innerHTML += html;
	$(html).appendTo(this.parent).mouseenter(onMouseOver).mouseleave(onMouseLeave);

	function onMouseOver() {
		$(this).css('transform', 'scale(1.2)');
	}
	
	function onMouseLeave() {
		$(this).css('transform', 'scale(1)');
	}
}

/************ 실행 **************/
var box = new Box('.wrapper', '200px', '200px', '#f00');
console.log(box);
box.init();

var box2 = new Box('.wrapper', '300px', '300px', '#0f0');
box2.init();

var box3 = new Box('.wrapper', '100px', '100px', '#00f');
box3.init();



function Test() {
	var a = 10;
	this.b = 20;
}

var test = new Test();
var test2 = new Test();
test2.b = 50;
console.log(test, test2);
console.log(test === test2);

var obj = {
	a: '10',
	b: '20'
}
var obj2 = obj; // 같은놈
obj2.b = '50';
console.log(obj, obj2);
console.log(obj2 === obj);
