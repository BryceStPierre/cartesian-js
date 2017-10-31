import Rectangle from "../geometry/Rectangle";
import Polygon from "../geometry/Polygon";
import GridUnit from "./GridUnit";

export default class GridArray {
    constructor (w, h, p, n) {
        this.p = p;
        this.n = n;

        this._units = [];
        this._lines = p.concat(n);
        this._bounds = new Rectangle(w, h);
        
        this.setConstraint(this._bounds.asPolygon());
    }

    setConstraint (c) {
        var id = 0;
        this._units = [];
        for (var i = 0; i + 1 <= this.p.length - 1; i++) {
            for (var j = 0; j + 1 <= this.n.length - 1; j++) {
                var p = new Polygon([
                    this.p[i].intersectWith(this.n[j]),
                    this.p[i+1].intersectWith(this.n[j]),
                    this.p[i+1].intersectWith(this.n[j+1]),
                    this.p[i].intersectWith(this.n[j+1])
                ]);
                if (this._bounds.containsPolygon(p) && c.containsPolygon(p)) {
                    var unit = new GridUnit(id++, p);
                    unit.row = i;
                    unit.column = j;
                    this._units.push(unit);
                }
            }
        }
    }

    asGraphic (h) {
        return {
            "lines": this._lines.map(l => {
                var points = [
                    l.atX(0),
                    l.atX(this._bounds.width),
                    l.atY(0),
                    l.atY(this._bounds.height)
                ];
                var x = [];
                points.forEach(p => {
                    if (this._bounds.containsPoint(p))
                        x.push(p.x);
                });
                return l.asGraphic(x[0], x[1], h);
            }),
            "units": this._units.map(u => u.asGraphic(h))
        };
    }
}