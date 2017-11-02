import Type from './Type';

export default class Point
{
    constructor (...p) {
        // Default.
        if (p.length === 0) {
            this._x = 0;
            this._y = 0;
        } // Object: {x, y}.
        else if (p.length === 1 && Type.isObject(p[0])) {
            this._x = p[0].x;
            this._y = p[0].y;
        } // Number, Number: a, b.
        else if (p.length === 2 && Type.isNumber(p[0]) && Type.isNumber(p[1])) {
            this._x = p[0];
            this._y = p[1];
        }
    }

    // Object: Point.
    // Number, Number: x, y.
    add (...p) {
        if (p.length === 1 && Type.isObject(p[0])) {
            this._x += p[0].x;
            this._y += p[0].y;
        } else if (p.length === 2 && Type.isNumber(p[0]) && Type.isNumber(p[1])) {
            this._x += p[0];
            this._y += p[1];
        }
    }

    // Number: n.
    // Number, Number: n1, n2.
    multiply (...p) {
        if (p.length === 1 && Type.isNumber(p[0])) {
            this._x *= p[0];
            this._y *= p[0];
        } else if (p.length === 2 && Type.isNumber(p[0]) && Type.isNumber(p[1])) {
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