import Type from './Type';
import Line from './Line';
import { Corner } from './Rectangle';

export default class Grid 
{
    constructor (region, spacing) {
        var box = region.boundingBox();

        //var p1 = region.points.

        if (p1.x < p1.x)

        var slope = region.edges
            .filter(e => e.slope > 0)
            .map(e => e.slope)
            .reduce((c, v, i, s) => c + (v / s.length), 0);

        var l1 = new Line (slope, p1);

        //const u = s * Math.sqrt(())
    }
}