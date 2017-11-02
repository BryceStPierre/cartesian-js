import Type from './Type';
import Point from './Point';

export default class Line 
{
    constructor (...p) {
        // Object: { x : n } | { y : n }.
        if (p.length === 1 && Type.isObject(p[0])) {
            // Horizontal.
            if (p[0].hasOwnProperty('x')) {
                this._xInt = p[0].x;
            } // Vertical.
            else if (p[0].hasOwnProperty('y')) {
                this._slope = 0;
                this._yInt = p[0].y;
            } 
            else if (p[0].hasOwnProperty('slope') && p[0].hasOwnProperty('yInt')) {
                this._slope = p[0].slope;
                this._yInt = p[0].yInt;
            }
        } // Number, Number: slope, yInt.
        else if (p.length === 2 && Type.isNumber(p[0]) && Type.isNumber(p[1])) {
            this._slope = p[0];
            this._yInt = p[1];
        } // Number, Object: slope, Point.
        else if (p.length === 2 && Type.isNumber(p[0]) && Type.isObject(p[1])) {
            this._slope = p[0];
            this._yInt = p[1].y - (this._slope * p[1].x);
        } // Object, Object: Point, Point.
        else if (p.length === 2 && Type.isObject(p[1]) && Type.isObject(p[1])) {
            if (p[0].x === p[1].x) {
                this._xInt = p[0].x;
            } else {
                this._slope = (p[1].y - p[0].y) / (p[1].x - p[0].x);
                this._yInt = p[0].y - (this._slope * p[0].x);
            }
        }
    }

    solveX (y) {
        if (this._xInt)
            return this._xInt;
        else if (this._slope !== 0)
            return (y - this._yInt) / this._slope;
    }
    
    solveY (x) {
        if (this._xInt)
            return null;
        else if (this._slope === 0)
            return this._yInt;
        else
            return (this._slope * x) + this._yInt;
    }

    atX (x) {
        if (this._xInt)
            return null;
        else
            return new Point(x, this.solveY(x));
    }

    atY (y) {
        if (this._xInt)


        return new Point(this.solveX(y), y);
    }
}