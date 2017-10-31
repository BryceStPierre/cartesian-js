import Point from './Point';

export default class Line 
{
    constructor (a = 0, b = 0) {
        if (typeof a === 'number' && typeof b === 'number') { 
            // Initializing with slope and y-intercept.
            this._slope = a;
            this._yInt = b;
        } else if (typeof a === 'number' && typeof b === 'object') {
            // Initializing with slope and a point.
            this._slope = a;
            this._yInt = b.y - (this._slope * b.x);
        } else if (typeof a === 'object' && typeof b === 'object') {
            // Initializing with two points.
            this._slope = (b.y - a.y) / (b.x - a.x);
            this._yInt = a.y - (this._slope * a.y);
        }
        // Adjust slope if line is horizontal or vertical.
        if (this._slope === 0)
            this._slope = 0.01; // Assume horizontal lines are positively sloped.
        if (isNaN(this._slope))
            this._slope = -500; // Assume vertical lines are negatively sloped.
    }

    intersectWith (l) {
        return this.atX((l._yInt - this._yInt) / (this._slope - l._slope));
    }
 
    angleWith (l) {
        var v = (this._slope - l._slope) / (1 + (this._slope * l._slope));
        return Math.atan(Math.abs(v)) * (180 / Math.PI);
    }

    solveForX (y) {
        return (y - this._yInt) / this._slope;
    }

    solveForY (x) {
        return (this._slope * x) + this._yInt;
    }

    atX (x) {
        return new Point(x, this.solveForY(x));
    }

    atY (y) {
        return new Point(this.solveForX(y), y);
    }

    asGraphic (x1, x2, h) {
        return {
            'x1': x1,
            'y1': h - this.solveForY(x1),
            'x2': x2,
            'y2': h - this.solveForY(x2)
        };
    }

    asString () {
        return `y = ${this._slope}x + ${this._yInt}`;
    }

    get inverseSlope () { return -1 / this._slope; }
    get slope () { return this._slope; }
    get yInt () { return this._yInt; }

    get json () {
        return {
            'slope': this._slope,
            'yInt': this._yInt 
        };
    }
    set json (o) {
        this._slope = o.slope;
        this._yInt = o.yInt;
    }
}