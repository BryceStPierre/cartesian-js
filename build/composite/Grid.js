import Type from '../primitive/Type';
import Line from '../primitive/Line';
import { Corner } from '../primitive/Rectangle';

export default class Grid 
{
    constructor (region, spacing) {
        var box = region.boundingBox();
        
        var sorted = region.points
            .map(p => { return { point: p, distance: p.distance(box.at(Corner.TOP_LEFT)) }; })
            .sort((a, b) => a.distance - b.distance);

        var slope = region.edges
            .filter(e => e.slope > 0)
            .map(e => e.slope)
            .reduce((c, v, i, s) => c + (v / s.length), 0);

        var p1 = sorted[0].point;
        var l1 = new Line(slope, p1);

        const u = spacing * Math.sqrt((l1.slope ** 2) + 1);
        
        var l2 = new Line(l1.slope, l1.yInt - u);
        var l3 = new Line(l1.inverse, p1);

        var p3 = l2.intersect(l3);
        var p4 = p1.rotate(p3);

        var l4 = new Line(l1.inverse, p4);

        const v = l4.yInt - l3.yInt;

        var pSet = [l1];
        var nSet = [l3];

        var l5 = new Line(l1.slope, box.at(Corner.TOP_LEFT));
        var l6 = new Line(l1.slope, box.at(Corner.BOTTOM_RIGHT));
        var next = l1.yInt + u;
        while (next < l5.yInt) {
            pSet.unshift(new Line(l1.slope, next));
            next += u;
        }
        next = l1.yInt - u;
        while (next > l6.yInt) {
            pSet.push(new Line(l1.slope, next));
            next -= u;
        }

        var l7 = new Line(l1.inverse, box.at(Corner.BOTTOM_LEFT));
        var l8 = new Line(l1.inverse, box.at(Corner.TOP_RIGHT));
        next = l3.yInt - v;
        while (next > l7.yInt) {
            nSet.unshift(new Line(l1.inverse, next));
            next -= v;
        }
        next = l3.yInt + v;
        while (next < l8.yInt) {
            nSet.push(new Line(l1.inverse, next));
            next += v;
        }

        this._lines = pSet.concat(nSet);
    }

    get lines () { return this._lines; }
}