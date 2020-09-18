function Rectangle(h, w) {
    this.h = h;
    this.w = w;
}

Rectangle.prototype.calcArea = function() {
    return this.h * this.w;
}

Object.defineProperty(Rectangle.prototype, 'area', {
    get: function() {
        return this.calcArea();
    }
})

let square = new Rectangle(23, 32);
console.log(square.area);