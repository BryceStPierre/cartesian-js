export default class GridUnit {
    constructor (id, polygon) {
        this._id = id;
        this._polygon = polygon;

        this._row = -1;
        this._column = -1;
        this._selected = false;
    }

    asGraphic (h) {
        return {
            "id": this._id,
            "polygon": this._polygon.asGraphic(h)
        };
    }

    get id () { return this._id; }

    get row () { return this._row; }
    set row (r) { this._row = r; }

    get column () { return this._column; }
    set column (c) { this._column = c; }

    get polygon () { return this._polygon; }

    get selected () { return this._selected; }
    set selected (s) { this._selected = s; }
}