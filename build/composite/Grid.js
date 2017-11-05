import Type from '../primitive/Type';
import Line from '../primitive/Line';
import Polygon from '../primitive/Polygon';
import { Corner } from '../primitive/Rectangle';

class GridArray {
    constructor (r, c, p, n) {
        this._array = [];

        for (var i = 0; i + 1 <= p.length - 1; i++) {
            var row = [];
            for (var j = 0; j + 1 <= n.length - 1; j++) {
                var u = new Polygon([
                    p[i].intersect(n[j]),
                    p[i+1].intersect(n[j]),
                    p[i+1].intersect(n[j+1]),
                    p[i].intersect(n[j+1])
                ]);
                var status = c.reduce((a, k) => {
                    return a && !k.containsAnyPoint(u);
                }, r.containsPolygon(u));
                if (status)
                    row.push({ state: 0, polygon: u });
                else
                    row.push({ state: -1, polygon: u });
            }
            this._array.push(row);
        }
    }

    asGraphic (h) {
        return this._array.reduce((a, c) => {
            return a.concat(c.map(u => {
                return { state: u.state, polygon: u.polygon.asGraphic(h) };
            }));
        }, []);
    }

    get size () {
        return this._array
            .reduce((a, c) => a.concat(c), [])
            .filter(u => u.state !== -1)
            .length;
    }
}

class GridData
{
    // Region, constraints, line1, point1, spacing.
    constructor (r, c, l1, p1, s) {
        this._box = r.boundingBox();

        const u = s * Math.sqrt((l1.slope ** 2) + 1);
        
        var l2 = new Line(l1.slope, l1.yInt - u);
        var l3 = new Line(l1.inverse, p1);

        var p3 = l2.intersect(l3);
        var p4 = p1.rotate(p3, -Math.PI / 2);
        var l4 = new Line(l1.inverse, p4);

        const v = l4.yInt - l3.yInt;

        this._pSet = [l1];
        this._nSet = [l3];

        var l5 = new Line(l1.slope, this._box.at(Corner.TOP_LEFT));
        var l6 = new Line(l1.slope, this._box.at(Corner.BOTTOM_RIGHT));
        var next = l1.yInt + u;
        while (next < l5.yInt) {
            this._pSet.unshift(new Line(l1.slope, next));
            next += u;
        }
        next = l1.yInt - u;
        while (next > l6.yInt) {
            this._pSet.push(new Line(l1.slope, next));
            next -= u;
        }

        var l7 = new Line(l1.inverse, this._box.at(Corner.BOTTOM_LEFT));
        var l8 = new Line(l1.inverse, this._box.at(Corner.TOP_RIGHT));
        next = l3.yInt - v;
        while (next > l7.yInt) {
            this._nSet.unshift(new Line(l1.inverse, next));
            next -= v;
        }
        next = l3.yInt + v;
        while (next < l8.yInt) {
            this._nSet.push(new Line(l1.inverse, next));
            next += v;
        }

        this._gridArray = new GridArray(r, c, this._pSet, this._nSet);
    }

    asGraphic (h) {
        return {
            lines: this._pSet.concat(this._nSet).map(l => {
                var v = [
                    l.atX(this._box.corner.x),
                    l.atX(this._box.corner.x + this._box.width),
                    l.atY(this._box.corner.y),
                    l.atY(this._box.corner.y - this._box.height)
                ].filter(p => this._box.containsPoint(p));
                return l.asGraphic(v[0].x, v[1].x, h);
            }),
            units: this._gridArray.asGraphic(h)
        }
    }

    get lines () { return this._pSet.concat(this._nSet); }
    get size () { return this._gridArray.size; }
}

export default class Grid 
{
    constructor (...p) {
        // Object, Number: {region}, spacing.
        if (p.length === 2 && Type.isObject(p[0]) && Type.isNumber(p[1])) {
            var r = p[0];
            var c = [];
            var s = p[1];
        } // Object, Array, Number: {region}, [polygons], spacing.
        else if (p.length === 3 && Type.isObject(p[0]) && Type.isArray(p[1]) && Type.isNumber(p[2])) {
            var r = p[0];
            var c = p[1];
            var s = p[2];
        } // Object, Object, Number: {region}, {polygon}, spacing.
        else if (p.length === 3 && Type.isObject(p[0]) && Type.isObject(p[1]) && Type.isNumber(p[2])) {
            var r = p[0];
            var c = [p[1]];
            var s = p[2];
        }

        var slope1 = r.edges
            .filter(e => e.slope > 0)
            .map(e => e.slope)
            .reduce((a, v, i, e) => a + (v / e.length), 0);

        var slope2 = r.edges
            .filter(e => e.slope < 0)
            .map(e => e.slope)
            .reduce((a, v, i, e) => a + (v / e.length), 0);
        slope2 = -1 / slope2;

        var p1 = r.points
            .map(p => { return { p: p, d: p.distance(r.boundingBox().at(Corner.TOP_LEFT)) }; })
            .sort((a, b) => a.d - b.d)
            [0]
            .p;
        p1.add(s / 2, s / -2); // Shift half a unit for precision.
        // ^ This could be used to optimize the number of units.

        var gridData1 = new GridData(r, c, new Line(slope1, p1), p1, s);
        var gridData2 = new GridData(r, c, new Line(slope2, p1), p1, s);
        this._gridData = gridData1.size < gridData2.size ? gridData2 : gridData1;
    }

    asGraphic (h) {
        return this._gridData.asGraphic(h);
    }
}