import Type from './Type';

export default class Point
{
    constructor (...p) {
        // Array: [x, y].
        if (p.length === 1 && Type.isArray(p[0])) {
            this._x = p[0][0];
            this._y = p[0][1];
        } // Object: { x: n, y: n }.
        else if (p.length === 1 && Type.isObject(p[0])) {
            this._x = p[0].x;
            this._y = p[0].y;
        } // Numbers: a, b.
        else if (p.length === 2 && Type.isNumber(p[0]) && Type.isNumber(p[1])) {
            this._x = p[0];
            this._y = p[1];
        } // Default.
        else {
            this._x = 0;
            this._y = 0;
        }
    }

    //
    add (x, y) {
        this._x += x;
        this._y += y;
    }

    // Multiply (c).
    // Multiply (c1, c2).
    multiply (...p) {
        if (p.length === 1) {
            this._x *= p[0];
            this._y *= p[0];
        } else if (p.length === 2) {
            this._x *= p[0];
            this._y *= p[1];
        }
    }
    
    get json () { 
        return {
            x: this._x,
            y: this._y
        };
    }

    get x () { return this._x; }
    get y () { return this._y; }

    set x (x) { this._x = x; }
    set y (y) { this._y = y; }
}