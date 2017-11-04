/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Type = function () {
    function Type() {
        _classCallCheck(this, Type);
    }

    _createClass(Type, null, [{
        key: 'isNumber',
        value: function isNumber(v) {
            return typeof v === 'number';
        }
    }, {
        key: 'isString',
        value: function isString(v) {
            return typeof v === 'string';
        }
    }, {
        key: 'isBoolean',
        value: function isBoolean(v) {
            return typeof v === 'boolean';
        }
    }, {
        key: 'isArray',
        value: function isArray(v) {
            return Array.isArray(v);
        }
    }, {
        key: 'isObject',
        value: function isObject(v) {
            return (typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object' && v !== null;
        }
    }]);

    return Type;
}();

exports.default = Type;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Type = __webpack_require__(0);

var _Type2 = _interopRequireDefault(_Type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Point = function () {
    function Point() {
        _classCallCheck(this, Point);

        for (var _len = arguments.length, p = Array(_len), _key = 0; _key < _len; _key++) {
            p[_key] = arguments[_key];
        }

        // Default.
        if (p.length === 0) {
            this._x = 0;
            this._y = 0;
        } // Object: {x, y}.
        else if (p.length === 1 && _Type2.default.isObject(p[0])) {
                this._x = p[0].x;
                this._y = p[0].y;
            } // Number, Number: a, b.
            else if (p.length === 2 && _Type2.default.isNumber(p[0]) && _Type2.default.isNumber(p[1])) {
                    this._x = p[0];
                    this._y = p[1];
                }
    }

    // Object: Point.
    // Number, Number: x, y.


    _createClass(Point, [{
        key: 'add',
        value: function add() {
            for (var _len2 = arguments.length, p = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                p[_key2] = arguments[_key2];
            }

            if (p.length === 1 && _Type2.default.isObject(p[0])) {
                this._x += p[0].x;
                this._y += p[0].y;
            } else if (p.length === 2 && _Type2.default.isNumber(p[0]) && _Type2.default.isNumber(p[1])) {
                this._x += p[0];
                this._y += p[1];
            }
        }

        // Number: n.
        // Number, Number: n1, n2.

    }, {
        key: 'multiply',
        value: function multiply() {
            if (arguments.length === 1 && _Type2.default.isNumber(arguments.length <= 0 ? undefined : arguments[0])) {
                this._x *= arguments.length <= 0 ? undefined : arguments[0];
                this._y *= arguments.length <= 0 ? undefined : arguments[0];
            } else if (arguments.length === 2 && _Type2.default.isNumber(arguments.length <= 0 ? undefined : arguments[0]) && _Type2.default.isNumber(arguments.length <= 1 ? undefined : arguments[1])) {
                this._x *= arguments.length <= 0 ? undefined : arguments[0];
                this._y *= arguments.length <= 1 ? undefined : arguments[1];
            }
        }

        // Only rotates 90 degrees.

    }, {
        key: 'rotate',
        value: function rotate(p) {
            return new Point(this._y + p.x - p.y, -1 * this._x + p.x + p.y);
        }
    }, {
        key: 'distance',
        value: function distance(point) {
            return Math.sqrt(Math.pow(this._x - point.x, 2) + Math.pow(this._y - point.y, 2));
        }
    }, {
        key: 'asJSON',
        value: function asJSON() {
            return {
                x: this._x,
                y: this._y
            };
        }
    }, {
        key: 'x',
        get: function get() {
            return this._x;
        },
        set: function set(x) {
            this._x = x;
        }
    }, {
        key: 'y',
        get: function get() {
            return this._y;
        },
        set: function set(y) {
            this._y = y;
        }
    }]);

    return Point;
}();

exports.default = Point;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Type = __webpack_require__(0);

var _Type2 = _interopRequireDefault(_Type);

var _Point = __webpack_require__(1);

var _Point2 = _interopRequireDefault(_Point);

var _Line = __webpack_require__(3);

var _Line2 = _interopRequireDefault(_Line);

var _Rectangle = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Polygon = function () {
    function Polygon() {
        for (var _len = arguments.length, p = Array(_len), _key = 0; _key < _len; _key++) {
            p[_key] = arguments[_key];
        }

        _classCallCheck(this, Polygon);

        // Default.
        if (p.length === 0) this._points = [];
        // Array: [].
        else if (p.length === 1 && _Type2.default.isArray(p[0])) this._points = p[0];
            // Object: {points}.
            else if (p.length === 1 && _Type2.default.isObject(p[0])) this._points = p[0].points.map(function (p) {
                    return new _Point2.default(p);
                });
    }

    _createClass(Polygon, [{
        key: 'containsPoint',
        value: function containsPoint(point) {
            var contains = false,
                vertices = this._points.map(function (p) {
                return [p.x, p.y];
            });
            for (var i = 0, j = vertices.length - 1; i < vertices.length; j = i++) {
                var xi = vertices[i][0],
                    yi = vertices[i][1];
                var xj = vertices[j][0],
                    yj = vertices[j][1];
                var intersect = yi > point.y != yj > point.y && point.x < (xj - xi) * (point.y - yi) / (yj - yi) + xi;
                if (intersect) contains = !contains;
            }
            return contains;
        }
    }, {
        key: 'containsPolygon',
        value: function containsPolygon(polygon) {
            var _this = this;

            return polygon.points.reduce(function (a, p) {
                return a && _this.containsPoint(p);
            }, true);
        }
    }, {
        key: 'boundingBox',
        value: function boundingBox() {
            var minX = Math.min(this._points.map(function (p) {
                return p.x;
            }));
            var maxX = Math.max(this._points.map(function (p) {
                return p.x;
            }));
            var minY = Math.min(this._points.map(function (p) {
                return p.y;
            }));
            var maxY = Math.max(this._points.map(function (p) {
                return p.y;
            }));
            return new _Rectangle.Rectangle(maxX - minX, maxY - minY, new _Point2.default(minX, maxY));
        }
    }, {
        key: 'asJSON',
        value: function asJSON() {
            return {
                points: this._points.map(function (p) {
                    return p.json;
                })
            };
        }
    }, {
        key: 'points',
        get: function get() {
            return this._points;
        }
    }, {
        key: 'edges',
        get: function get() {
            var _this2 = this;

            return this._points.map(function (p, i) {
                var j = i === _this2._points.length - 1 ? 0 : i + 1;
                return new _Line2.default(_this2._points[i], _this2._points[j]);
            });
        }
    }]);

    return Polygon;
}();

exports.default = Polygon;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Type = __webpack_require__(0);

var _Type2 = _interopRequireDefault(_Type);

var _Point = __webpack_require__(1);

var _Point2 = _interopRequireDefault(_Point);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Line = function () {
    function Line() {
        _classCallCheck(this, Line);

        var verticalSlope = -250;
        var horizontalSlope = 0.001;

        // Object: {slope, yInt}.

        for (var _len = arguments.length, p = Array(_len), _key = 0; _key < _len; _key++) {
            p[_key] = arguments[_key];
        }

        if (p.length === 1 && _Type2.default.isObject(p[0])) {
            if (p[0].hasOwnProperty('slope') && p[0].hasOwnProperty('yInt')) {
                this._slope = p[0].slope;
                this._yInt = p[0].yInt;
            }
        } // Number, Number: slope, yInt.
        else if (p.length === 2 && _Type2.default.isNumber(p[0]) && _Type2.default.isNumber(p[1])) {
                if (!Number.isFinite(p[0])) this._slope = verticalSlope;else if (p[0] === 0) this._slope = horizontalSlope;else this._slope = p[0];
                this._yInt = p[1];
            } // Number, Object: slope, Point.
            else if (p.length === 2 && _Type2.default.isNumber(p[0]) && _Type2.default.isObject(p[1])) {
                    if (!Number.isFinite(p[0])) this._slope = verticalSlope;else if (p[0] === 0) this._slope = horizontalSlope;else this._slope = p[0];
                    this._yInt = p[1].y - this._slope * p[1].x;
                } // Object, Object: Point, Point.
                else if (p.length === 2 && _Type2.default.isObject(p[1]) && _Type2.default.isObject(p[1])) {
                        if (p[0].x === p[1].x) this._slope = verticalSlope;else if (p[0].y === p[1].y) this._slope = horizontalSlope;else this._slope = (p[1].y - p[0].y) / (p[1].x - p[0].x);
                        this._yInt = p[0].y - this._slope * p[0].x;
                    }
    }

    _createClass(Line, [{
        key: 'atX',
        value: function atX(x) {
            return new _Point2.default(x, this._slope * x + this._yInt);
        }
    }, {
        key: 'atY',
        value: function atY(y) {
            return new _Point2.default((y - this._yInt) / this._slope, y);
        }
    }, {
        key: 'intersect',
        value: function intersect(line) {
            return this.atX((line.yInt - this._yInt) / (this._slope - line.slope));
        }
    }, {
        key: 'asJSON',
        value: function asJSON() {
            return {
                slope: this._slope,
                yInt: this._yInt
            };
        }
    }, {
        key: 'inverse',
        get: function get() {
            return -1 / this._slope;
        }
    }, {
        key: 'slope',
        get: function get() {
            return this._slope;
        }
    }, {
        key: 'yInt',
        get: function get() {
            return this._yInt;
        }
    }]);

    return Line;
}();

exports.default = Line;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Rectangle = exports.Corner = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Type = __webpack_require__(0);

var _Type2 = _interopRequireDefault(_Type);

var _Point = __webpack_require__(1);

var _Point2 = _interopRequireDefault(_Point);

var _Polygon = __webpack_require__(2);

var _Polygon2 = _interopRequireDefault(_Polygon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Corner = {
    TOP_LEFT: 0,
    TOP_RIGHT: 1,
    BOTTOM_RIGHT: 2,
    BOTTOM_LEFT: 3
};

var Rectangle = function () {
    function Rectangle() {
        _classCallCheck(this, Rectangle);

        for (var _len = arguments.length, p = Array(_len), _key = 0; _key < _len; _key++) {
            p[_key] = arguments[_key];
        }

        // Default.
        if (p.length === 0) {
            this._width = 0;
            this._height = 0;
            this._corner = new _Point2.default(0, 0);
        } // Object: {width, height, corner}.
        else if (p.length === 1 && _Type2.default.isObject(p[0])) {
                this._width = p[0].width;
                this._height = p[0].height;
                this._corner = p[0].corner;
            } // Number, Number: width, height.
            else if (p.length === 2 && _Type2.default.isNumber(p[0]) && _Type2.default.isNumber(p[1])) {
                    this._width = p[0];
                    this._height = p[1];
                    this._corner = new _Point2.default(0, this._height);
                } // Number, Number, Object: width, height, Point.
                else if (p.length === 3 && _Type2.default.isNumber(p[0]) && _Type2.default.isNumber(p[1]) && _Type2.default.isObject(p[2])) {
                        this._width = p[0];
                        this._height = p[1];
                        this._corner = p[2];
                    }
    }

    _createClass(Rectangle, [{
        key: 'at',
        value: function at(i) {
            var points = [this._corner, new _Point2.default(this._corner.x + this._width, this._corner.y), new _Point2.default(this._corner.x + this._width, this._corner.y - this._height), new _Point2.default(this._corner.x, this._corner.y - this._height)];
            return points[i];
        }
    }, {
        key: 'containsPoint',
        value: function containsPoint(point) {
            return point.x >= this._corner.x && point.x <= this._corner.x + this._width && point.y <= this._corner.y && point.y >= this._corner.y - this._height;
        }
    }, {
        key: 'containsPolygon',
        value: function containsPolygon(polygon) {
            var _this = this;

            return polygon.points.reduce(function (a, p) {
                return a && _this.containsPoint(p);
            }, true);
        }
    }, {
        key: 'asPolygon',
        value: function asPolygon() {
            return new _Polygon2.default([this.atCorner(0), this.atCorner(1), this.atCorner(2), this.atCorner(3)]);
        }
    }, {
        key: 'asJSON',
        value: function asJSON() {
            return {
                width: this._width,
                height: this._height,
                corner: this._corner
            };
        }
    }, {
        key: 'width',
        get: function get() {
            return this._width;
        },
        set: function set(w) {
            this._width = w;
        }
    }, {
        key: 'height',
        get: function get() {
            return this._height;
        },
        set: function set(h) {
            this._height = h;
        }
    }, {
        key: 'corner',
        get: function get() {
            return this._corner;
        },
        set: function set(c) {
            this._corner = c;
        }
    }]);

    return Rectangle;
}();

exports.Corner = Corner;
exports.Rectangle = Rectangle;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Point = __webpack_require__(1);

var _Point2 = _interopRequireDefault(_Point);

var _Polygon = __webpack_require__(2);

var _Polygon2 = _interopRequireDefault(_Polygon);

var _Grid = __webpack_require__(6);

var _Grid2 = _interopRequireDefault(_Grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var polygon = new _Polygon2.default([new _Point2.default(30, 375), new _Point2.default(300, 360), new _Point2.default(297, 45), new _Point2.default(20, 20)]);

var grid = new _Grid2.default(polygon, 5);

console.log(grid.lines);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Type = __webpack_require__(0);

var _Type2 = _interopRequireDefault(_Type);

var _Line = __webpack_require__(3);

var _Line2 = _interopRequireDefault(_Line);

var _Rectangle = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Grid = function () {
        function Grid(region, spacing) {
                _classCallCheck(this, Grid);

                var box = region.boundingBox();

                var sorted = region.points.map(function (p) {
                        return { point: p, distance: p.distance(box.at(_Rectangle.Corner.TOP_LEFT)) };
                }).sort(function (a, b) {
                        return a.distance - b.distance;
                });

                var slope = region.edges.filter(function (e) {
                        return e.slope > 0;
                }).map(function (e) {
                        return e.slope;
                }).reduce(function (c, v, i, s) {
                        return c + v / s.length;
                }, 0);

                var p1 = sorted[0].point;
                var l1 = new _Line2.default(slope, p1);

                var u = spacing * Math.sqrt(Math.pow(l1.slope, 2) + 1);

                var l2 = new _Line2.default(l1.slope, l1.yInt - u);
                var l3 = new _Line2.default(l1.inverse, p1);

                var p3 = l2.intersect(l3);
                var p4 = p1.rotate(p3);

                var l4 = new _Line2.default(l1.inverse, p4);

                var v = l4.yInt - l3.yInt;

                var pSet = [l1];
                var nSet = [l3];

                var l5 = new _Line2.default(l1.slope, box.at(_Rectangle.Corner.TOP_LEFT));
                var l6 = new _Line2.default(l1.slope, box.at(_Rectangle.Corner.BOTTOM_RIGHT));
                var next = l1.yInt + u;
                while (next < l5.yInt) {
                        pSet.unshift(new _Line2.default(l1.slope, next));
                        next += u;
                }
                next = l1.yInt - u;
                while (next > l6.yInt) {
                        pSet.push(new _Line2.default(l1.slope, next));
                        next -= u;
                }

                var l7 = new _Line2.default(l1.inverse, box.at(_Rectangle.Corner.BOTTOM_LEFT));
                var l8 = new _Line2.default(l1.inverse, box.at(_Rectangle.Corner.TOP_RIGHT));
                next = l3.yInt - v;
                while (next > l7.yInt) {
                        nSet.unshift(new _Line2.default(l1.inverse, next));
                        next -= v;
                }
                next = l3.yInt + v;
                while (next < l8.yInt) {
                        nSet.push(new _Line2.default(l1.inverse, next));
                        next += v;
                }

                this._lines = pSet.concat(nSet);
        }

        _createClass(Grid, [{
                key: 'lines',
                get: function get() {
                        return this._lines;
                }
        }]);

        return Grid;
}();

exports.default = Grid;

/***/ })
/******/ ]);