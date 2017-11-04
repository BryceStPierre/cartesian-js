import Type from './Type';
import Point from './Point';
import Line from './Line';
import { Rectangle } from './Rectangle';

export default class Polygon
{
    constructor (...p) {
        // Default.
        if (p.length === 0)
            this._points = [];
        // Array: [].
        else if (p.length === 1 && Type.isArray(p[0]))
            this._points = p[0];
        // Object: {points}.
        else if (p.length === 1 && Type.isObject(p[0]))
        this._points = p[0].points.map(p => new Point(p));
    }

    containsPoint (point) {
        var contains = false,
            vertices = this._points.map(p => [p.x, p.y]);
        for (var i = 0, j = vertices.length - 1; i < vertices.length; j = i++) {
            var xi = vertices[i][0], yi = vertices[i][1];
            var xj = vertices[j][0], yj = vertices[j][1];
            var intersect = ((yi > point.y) != (yj > point.y))
                && (point.x < (xj - xi) * (point.y - yi) / (yj - yi) + xi);
            if (intersect) 
                contains = !contains;
        }
        return contains;
    }

    containsPolygon (polygon) {
        return polygon.points.reduce((a, p) => a && this.containsPoint(p), true);
    }

    boundingBox () {
        var minX = Math.min(this._points.map(p => p.x));
        var maxX = Math.max(this._points.map(p => p.x));
        var minY = Math.min(this._points.map(p => p.y));
        var maxY = Math.max(this._points.map(p => p.y));
        return new Rectangle(maxX - minX, maxY - minY, new Point(minX, maxY))
    }

    asJSON () {
        return {
            points: this._points.map(p => p.json)
        }
    }

    get points () { return this._points; }
    get edges () {
        return this._points.map((p, i) => {
            var j = (i === this._points.length - 1) ? 0 : i + 1;
            return new Line(this._points[i], this._points[j]);
        });
    }
}