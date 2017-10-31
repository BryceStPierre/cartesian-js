import Point from './Point';
import Polygon from './Polygon';

export default class Rectangle 
{
    constructor (width = 0, height = 0) {
        this._width = width;
        this._height = height;
        this._corner = new Point(0, height);
    }

    containsPoint (point) {
        var x = point.x >= this._corner.x && point.x <= this._corner.x + this._width,
            y = point.y <= this._corner.y && point.y >= this._corner.y - this._height;
        return x && y;
    }

    containsPolygon (polygon) {
        var contains = true;
        polygon.points.forEach(p => {
            contains = contains && this.containsPoint(p);
        });
        return contains;
    }

    asPolygon () {
        return new Polygon([
            this._corner,
            new Point(this._corner.x + this._width, this._corner.y),
            new Point(this._corner.x + this._width, this._corner.y - this._height),
            new Point(this._corner.x, this._corner.y - this._height)
        ]);
    }

    asGraphic (h) {
        return {
            'x': this._corner.asGraphic(h).x,
            'y': this._corner.asGraphic(h).y,
            'width': this._width,
            'height': this._height
        }
    }

    asString () {
        return `[${this._width}, ${this._height}, ${this._corner.asJSON(h)}]`;
    }

    get width () { return this._width; }
    set width (w) { this._width = w; }

    get height () { return this._height; } 
    set height (h) { this._height = h; }

    get corner () { return this._corner; }
    set corner (c) { this._corner = c; }

    get json () {
        return {
            'width': this._width,
            'height': this._height,
            'corner': this._corner.json 
        };
    }
    set json (o) {
        this._width = o.width;
        this._height = o.height;
        this._corner = new Point();
        this._corner.json = o.corner;
    }
}