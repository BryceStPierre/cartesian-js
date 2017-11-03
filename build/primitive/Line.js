import Type from './Type';
import Point from './Point';

export default class Line 
{
    constructor (...p) {
        const verticalSlope = -250;
        const horizontalSlope = 0.001;

        // Object: {slope, yInt}.
        if (p.length === 1 && Type.isObject(p[0])) {
            if (p[0].hasOwnProperty('slope') && p[0].hasOwnProperty('yInt')) {
                this._slope = p[0].slope;
                this._yInt = p[0].yInt;
            }
        } // Number, Number: slope, yInt.
        else if (p.length === 2 && Type.isNumber(p[0]) && Type.isNumber(p[1])) {
            if (!Number.isFinite(p[0]))
                this._slope = verticalSlope;
            else if (p[0] === 0)
                this._slope = horizontalSlope;
            else
                this._slope = p[0];
            this._yInt = p[1];
        } // Number, Object: slope, Point.
        else if (p.length === 2 && Type.isNumber(p[0]) && Type.isObject(p[1])) {
            if (!Number.isFinite(p[0]))
                this._slope = verticalSlope;
            else if (p[0] === 0)
                this._slope = horizontalSlope;
            else
                this._slope = p[0];
            this._yInt = p[1].y - (this._slope * p[1].x);
        } // Object, Object: Point, Point.
        else if (p.length === 2 && Type.isObject(p[1]) && Type.isObject(p[1])) {
            if (p[0].x === p[1].x)
                this._slope = verticalSlope;
            else if (p[0].y === p[1].y)
                this._slope = horizontalSlope;
            else
                this._slope = (p[1].y - p[0].y) / (p[1].x - p[0].x);
            this._yInt = p[0].y - (this._slope * p[0].x);
        }
    }

    atX (x) {
        return new Point(x, (this._slope * x) + this._yInt);
    }

    atY (y) {
        return new Point((y - this._yInt) / this._slope, y);
    }

    intersect (line) {
        return this.atX((line.yInt - this._yInt) / (this._slope - line.slope));
    }

    asJSON () {
        return {
            slope: this._slope,
            yInt: this._yInt
        }
    }

    get inverse () { return -1 / this._slope; }
    get slope () { return this._slope; }
    get yInt () { return this._yInt; }
}