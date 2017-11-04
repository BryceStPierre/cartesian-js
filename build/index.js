import Point from './primitive/Point';
import Polygon from './primitive/Polygon';
import Grid from './composite/Grid';

import * as d3 from 'd3';

var polygon = new Polygon([
    new Point(50, 340),
    new Point(340, 340),
    new Point(340, 50),
    new Point(50, 50)
]);

/*var polygon = new Polygon([
    new Point(30, 375),
    new Point(300, 360),
    new Point(297, 45),
    new Point(20, 20)
]);*/
var box = polygon.boundingBox();
var grid = new Grid(polygon, 20);

const w = 500;
const h = 400;

var canvas = d3.select('#canvas')
    .append('svg')
    .attr('width', w)
    .attr('height', h);

var boxG = box.asGraphic(h);
canvas.append('rect')
    .attr('x', boxG.x)
    .attr('y', boxG.y)
    .attr('width', boxG.width)
    .attr('height', boxG.height)
    .attr('fill', '#EEE')

canvas.append('polygon')
    .attr('points', polygon.asGraphic(h).points)
    .attr('fill', '#AAA');

canvas.selectAll('line')
    .data(grid.asGraphic(h).lines)
    .enter()
    .append('line')
    .attr('x1', d => d.x1)
    .attr('y1', d => d.y1)
    .attr('x2', d => d.x2)
    .attr('y2', d => d.y2)
    .attr('stroke', 'blue');

console.log(grid.lines);