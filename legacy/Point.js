export default class Point 
{
    constructor (a = 0, b = 0) {
        this._x = a;
        this._y = b;
    }

    add (x, y) {
        this._x += x;
        this._y += y;
    }

    multiply (c) {
        this._x *= c;
        this._y *= c;
    }

    rotate90Degrees (p) {
        var a = p.x,
            b = p.y;
        return new Point(this._y + a - b, (-1 * this._x) + a + b);
    }

    isNear (p, threshold) {
        return Math.sqrt(
            Math.pow(this._x - p.x, 2) + Math.pow(this._y - p.y, 2)
        ) < threshold;
    }

    asGraphic (h) {
        return { 
            'x': this._x,
            'y': h - this._y
        };
    }

    asString () {
        return `(${this._x}, ${this._y})`;
    }

    get x () { return this._x; }
    set x (x) { this._x = x; }

    get y () { return this._y; }
    set y (y) { this._y = y; }

    get json () { 
        return { 
            'x': this._x,
            'y': this._y
        };
    }
    set json (o) {
        this._x = o.x;
        this._y = o.y;
    }
}