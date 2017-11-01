import Type from './Type';

export default class Point
{
    constructor (...p) {
        try {
            // Default.
            if (p.length === 0) {
                this._x = 0;
                this._y = 0;
            } // Array: [x, y].
            else if (p.length === 1 && Type.isArray(p[0])) {
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
            else 
                throw new Error('PointConstructFailure');
        } catch (e) {
            console.error(e.stack);
        }
    }

    add (...p) {
        try {
            if (p.length === 1 && Type.isObject(p[0])) {
                this._x += p[0].x;
                this._y += p[0].y;
            } else if (p.length === 2 && Type.isNumber(p[0]) && Type.isNumber(p[1])) {
                this._x += p[0];
                this._y += p[1];
            } else
                throw new Error('PointAddFailure');
        } catch (e) {
            console.error(e.stack);
        }
    }

    multiply (...p) {
        try {
            if (p.length === 1 && Type.isNumber(p[0])) {
                this._x *= p[0];
                this._y *= p[0];
            } else if (p.length === 2 && Type.isNumber(p[0]) && Type.isNumber(p[1])) {
                this._x *= p[0];
                this._y *= p[1];
            } else 
                throw new Error('PointMultiplyFailure');
        } catch (e) {
            console.error(e.stack);
        }
    }

    // rotate () { }

    isNear (point, threshold) {
        try {
            if (Type.isObject(point) && Type.isNumber(threshold)) {
                return Math.sqrt(
                    ((this._x - point.x) ** 2) + ((this._x - point.y) ** 2)
                ) < threshold;
            } else
                throw new Error('PointIsNearFailure');
        } catch (e) {
            console.error(e.stack);
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