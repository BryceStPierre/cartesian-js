import Point from './Point';
import Line from './Line';

export default class Polygon 
{
    constructor (points = []) {
        this._points = points;
    }

    translate (x, y) {
        this._points.forEach(p => { p.add(x, y); });
    }

    scale (n) {
        this._points.forEach(p => { p.multiply(n); });
    }

    containsPoint (point) {
        var c = false,
            x = point.x,
            y = point.y,
            v = this._points.map(p => [p.x, p.y]);
        for (var i = 0, j = v.length - 1; i < v.length; j = i++) {
            var xi = v[i][0], yi = v[i][1], xj = v[j][0], yj = v[j][1];
            if (((yi > y) !== (yj > y)) && (x < (xj-xi) * (y-yi) / (yj-yi) + xi)) 
                c = !c;
        }
        return c;
    }

    containsPolygon (polygon) {
        var contains = true;
        polygon.points.forEach(p => {
            contains = contains && this.containsPoint(p);
        });
        return contains;
    }

    asGraphic (h) {
        return this._points.map(p => `${p.asGraphic(h).x},${p.asGraphic(h).y}`).join(" ");
    }

    asString () {
        var string = this._points.reduce((a, p) => a + p.asString(), "");
        return `[${string}]`;
    }

    get points () { return this._points; }
    get edges () {
        var edges = [];
        this._points.forEach((p, i) => {
            var j = (i === this._points.length - 1) ? 0 : i + 1;
            edges.push(new Line(this._points[i], this._points[j]));
        });
        return edges;
    }

    get json () {
        return {
            'points': this._points.map(p => p.json)
        };
    }
    set json (o) {
        this._points = o.points.map(p => {
            var point = new Point();
            point.json = p;
            return point;
        });
    }
}
