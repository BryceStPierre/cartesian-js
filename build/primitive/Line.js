import Type from './Type';
import Point from './Point';

export default class Line 
{
    constructor (...p) {
        try {
            // Object: { x : n } or { y : n }.
            if (p.length === 1 && Type.isObject(p[0])) {

            } // Number, Number: slope, yInt.
            else if (p.length === 2 && Type.isNumber(p[0]) && Type.isNumber(p[1])) {
                
            } // Number, Object: slope, Point.
            else if (p.length === 2 && Type.isNumber(p[0]) && Type.isObject(p[1])) {

            } // Object, Object: Point, Point.
            else if (p.length === 2 && Type.isObject(p[1]) && Type.isObject(p[1])) {
                
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