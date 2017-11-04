import * as d3 from 'd3';

import Point from './primitive/Point';
import Polygon from './primitive/Polygon';
import Grid from './composite/Grid';

const w = 500;
const h = 400;

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

var con = new Polygon([
    new Point(80, 120),
    new Point(220, 140),
    new Point(220, 50),
    new Point(45, 25)
]);

var box = polygon.boundingBox().asGraphic(h);
var grid = new Grid(polygon, con, 30);

var canvas = d3.select('#canvas')
    .append('svg')
    .attr('width', w)
    .attr('height', h);

canvas.append('rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', w)
    .attr('height', h)
    .attr('fill', '#EEE');

canvas.append('rect')
    .attr('x', box.x)
    .attr('y', box.y)
    .attr('width', box.width)
    .attr('height', box.height)
    .attr('fill', '#CCC')

canvas.append('polygon')
    .attr('points', polygon.asGraphic(h).points)
    .attr('fill', '#AAA');

canvas.append('polygon')
    .attr('points', con.asGraphic(h).points)
    .attr('fill', 'purple')
    .style('fill-opacity', 0.5);

canvas.selectAll('line')
    .data(grid.asGraphic(h).lines)
    .enter()
    .append('line')
    .attr('x1', d => d.x1)
    .attr('y1', d => d.y1)
    .attr('x2', d => d.x2)
    .attr('y2', d => d.y2)
    .attr('stroke', 'blue');

canvas.selectAll('.unit')
    .data(grid.asGraphic(h).units)
    .enter()
    .append('polygon')
    .attr('points', d => d.polygon.points)
    .style('fill-opacity', 0.5)
    .style('fill', d => {
        return d.state === 0 ? 'green' : 'red';
    });