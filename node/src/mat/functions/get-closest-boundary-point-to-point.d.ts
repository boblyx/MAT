import { Curve } from '../../linked-list/curve';
import { PointOnShape } from '../classes/point-on-shape';
import { BezierPiece } from '../classes/bezier-piece';
/**
 * Gets the closest boundary point to the given point, limited to the
 * given bezier pieces.
 *
 * @param bezierPieces
 * @param point
 * @param touchedBezierNode
 * @returns {PointOnShape} The closest point.
 */
declare function getClosestBoundaryPointToPoint(bezierPieces_: BezierPiece[], point: number[], touchedBezierNode: Curve, t: number): PointOnShape;
export { getClosestBoundaryPointToPoint };
