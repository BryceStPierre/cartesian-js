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

    // Only rotates 90 degrees.
    rotate (p) {
        return new Point(this._y + p.x - p.y, (-1 * this._x) + p.x + p.y);
    }

    distance (point) {
        return Math.sqrt(
            ((this._x - point.x) ** 2) + ((this._y - point.y) ** 2)
        );
    }

    asGraphic (h) {
        return {
            x: this._x,
            y: h - this._y
        };
    }

    asJSON () {
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