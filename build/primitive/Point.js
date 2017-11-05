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

    add (...p) {
        // Object: Point.
        if (p.length === 1 && Type.isObject(p[0])) {
            this._x += p[0].x;
            this._y += p[0].y;
        } // Number, Number: x, y.
        else if (p.length === 2 && Type.isNumber(p[0]) && Type.isNumber(p[1])) {
            this._x += p[0];
            this._y += p[1];
        }
    }

    multiply (...p) {
        // Number: n.
        if (p.length === 1 && Type.isNumber(p[0])) {
            this._x *= p[0];
            this._y *= p[0];
        } // Number, Number: n1, n2. 
        else if (p.length === 2 && Type.isNumber(p[0]) && Type.isNumber(p[1])) {
            this._x *= p[0];
            this._y *= p[1];
        }
    }

    // Object, Number: point, radians.
    rotate (p, r) {
        return new Point(
            p.x + Math.cos(r) * (this._x - p.x) - Math.sin(r) * (this._y - p.y),
            p.y + Math.sin(r) * (this._x - p.x) + Math.cos(r) * (this._y - p.y)
        );
    }

    // Object: point.
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