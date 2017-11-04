import Type from './Type';
import Point from './Point';
import Polygon from './Polygon';

const Corner = {
    TOP_LEFT: 0,
    TOP_RIGHT: 1,
    BOTTOM_RIGHT: 2,
    BOTTOM_LEFT: 3
};

class Rectangle
{
    constructor (...p) {
        // Default.
        if (p.length === 0) {
            this._width = 0;
            this._height = 0;
            this._corner = new Point(0, 0);
        } // Object: {width, height, corner}.
        else if (p.length === 1 && Type.isObject(p[0])) {
            this._width = p[0].width;
            this._height = p[0].height;
            this._corner = p[0].corner;
        } // Number, Number: width, height.
        else if (p.length === 2 && Type.isNumber(p[0]) && Type.isNumber(p[1])) {
            this._width = p[0];
            this._height = p[1];
            this._corner = new Point(0, this._height);
        } // Number, Number, Object: width, height, Point.
        else if (p.length === 3 && Type.isNumber(p[0]) && Type.isNumber(p[1]) && Type.isObject(p[2])) {
            this._width = p[0];
            this._height = p[1];
            this._corner = p[2];
        }
    }

    at (i) {
        var points = [
            this._corner,
            new Point(this._corner.x + this._width, this._corner.y),
            new Point(this._corner.x + this._width, this._corner.y - this._height),
            new Point(this._corner.x, this._corner.y - this._height)
        ];
        return points[i];
    }

    containsPoint (point) {
        return point.x >= this._corner.x && point.x <= (this._corner.x + this._width)
            && point.y <= this._corner.y && point.y >= (this._corner.y - this._height);
    }

    containsPolygon (polygon) {
        return polygon.points.reduce((a, p) => a && this.containsPoint(p), true);
    }

    asPolygon () {
        return new Polygon([
            this.at(Corner.TOP_LEFT),
            this.at(Corner.TOP_RIGHT),
            this.at(Corner.BOTTOM_RIGHT),
            this.at(Corner.BOTTOM_LEFT)
        ]);
    }

    asGraphic (h) {
        return {
            x: this._corner.asGraphic(h).x,
            y: this._corner.asGraphic(h).y,
            width: this._width,
            height: this._height
        };
    }

    asJSON () {
        return {
            width: this._width,
            height: this._height,
            corner: this._corner
        };
    }

    get width () { return this._width; }
    get height () { return this._height; }
    get corner () { return this._corner; }

    set width (w) { this._width = w; }
    set height (h) { this._height = h; }
    set corner (c) { this._corner = c; }
}

export { Corner, Rectangle };