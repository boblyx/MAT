"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const flo_vector2d_1 = require("flo-vector2d");
const get_closest_boundary_point_1 = require("../../get-closest-boundary-point");
/**
 * Finds an initial 3-prong circle center point from which to iterate. The point
 * must be within the shape.
 * @param δ3s - The three boundary pieces of which we need to find the three
 * 3-prong points.
 * @param bezierPiece3s
 * @param extreme
 */
function calcInitial3ProngCenter(δ3s, bezierPiece3s) {
    let twoProngCircleCenter = δ3s[0][0].cp.circle.center;
    /*
    let twoProngCircleCenter =
        mean([
            δ3s[0][0].cp.pointOnShape.p,
            δ3s[2][1].cp.pointOnShape.p
        ]);
        */
    //_debug_.fs.draw.dot(_debug_.generated.g, twoProngCircleCenter, 0.05, 'blue');
    let pos = get_closest_boundary_point_1.getClosestBoundaryPoint(bezierPiece3s[1], twoProngCircleCenter, undefined, // curve
    undefined // t
    );
    let meanPoints = [
        δ3s[0][0].cp.pointOnShape.p,
        pos.p,
        δ3s[2][1].cp.pointOnShape.p,
    ];
    return flo_vector2d_1.circumCenter(meanPoints);
}
exports.calcInitial3ProngCenter = calcInitial3ProngCenter;
