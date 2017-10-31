import Point from "../geometry/Point";
import Line from "../geometry/Line";
import GridArray from "./GridArray";

export default class Grid {
    constructor (w, h, l, s) {
        const u = s * Math.sqrt(Math.pow(l.slope, 2) + 1); // Step F.
        var p1 = new Point(0, l.yInt);
        var p2 = new Point(0, l.yInt - u);

        var line2 = new Line(l.slope, p2); // Step G.
        var line3 = new Line(l.inverseSlope, p1); // Step H.

        var p3 = line2.intersectWith(line3); // Step I.
        var p4 = p1.rotate90Degrees(p3);
        var line4 = new Line(l.inverseSlope, p4);

        const v = line4.yInt - line3.yInt; // Step J.
        
        var pSet = [l]; // Step K.
        var nSet = [line3];

        var line5 = new Line(l.slope, new Point(w, 0)), // Step L.
            line6 = new Line(l.slope, new Point(0, h));
        var next = l.yInt - u;
        while (next > line5.yInt) {
            pSet.push(new Line(l.slope, next));
            next -= u;
        }
        next = l.yInt + u;
        while (next < line6.yInt) {
            pSet.unshift(new Line(l.slope, next));
            next += u;
        }

        var line7 = new Line(l.inverseSlope, new Point(0, 0)), // Step M.
            line8 = new Line(l.inverseSlope, new Point(w, h));
        next = line3.yInt - v;
        while (next > line7.yInt) {
            nSet.unshift(new Line(l.inverseSlope, next));
            next -= v;
        }
        next = line3.yInt + v;
        while (next < line8.yInt) {
            nSet.push(new Line(l.inverseSlope, next));
            next += v;
        }

        this.array = new GridArray(w, h, pSet, nSet);
    }

    setConstraint (polygon) {
        this.array.setConstraint(polygon);
    }

    asGraphic (h) {
        return this.array.asGraphic(h);
    }
}