//complete this code
class Rectangle {
	constructor(width,height){
		this.width = width;
		this.height = height;
	}
	set width(space){
		this.width = space;
	}
	set height(space){
		this.height = space;
	}
	get width(){
		return this.width;
	}
	get heigth(){
		return this.height;
	}
	getArea(){
		return (this.width * this.height);
	}
}

class Square extends Rectangle {
	constructor(width,height){
		super(width,height);
	}
	getPerimeter(){
		return 4*(this.width);
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
