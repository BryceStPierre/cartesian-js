import Point from './primitive/Point';
import Polygon from './primitive/Polygon';
import Grid from './composite/Grid';

var polygon = new Polygon([
    new Point(30, 375),
    new Point(300, 360),
    new Point(297, 45),
    new Point(20, 20)
]);

var grid = new Grid(polygon, 5);

console.log(grid.lines);