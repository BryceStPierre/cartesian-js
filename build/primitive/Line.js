import Type from './Type';
import Point from './Point';

export default class Line 
{
    constructor (...p) {
        try {
            // Object: { x : n } or { y : n }.
            if (p.length === 1 && Type.isObject(p[0])) {
                // Horizontal.
                if (p[0].hasOwnProperty('x')) {
                    this._slope = Infinity;
                    this._xInt = p[0].x;
                } // Vertical.
                else if (p[0].hasOwnProperty('y')) {
                    this._slope = 0;
                    this._yInt = p[0].y;
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
                this._slope = (p[1].y - p[0].y) / (p[1].x - p[0].x);
                this._yInt = p[0].y - (this._slope * p[0].x);
            }
            else
                throw new Error('LineConstructFailure');
        } catch (e) {
            console.error(e.stack);
        }
    }

    solveX (y) {

    }

    solveY (x) {

    }

    atX (x) {

    }

    atY (y) {

    }
}