import { getNeighbouringPoints } from '../mat/get-neighboring-cps.js';
import { getBoundaryPieceBeziers } from '../mat/get-boundary-piece-beziers.js';
import { isPosDullCorner } from '../point-on-shape/is-pos-dull-corner.js';
import { calcPosOrder } from '../point-on-shape/calc-pos-order.js';
/** @internal */
function getInitialBezierPieces(angle, isHoleClosing, k, loops, cpTrees, y, circle) {
    if (isHoleClosing) {
        const bezierPieces = [];
        for (let k2 = 0; k2 < k; k2++) {
            const pieces = loops[k2].curves
                .map(curve => ({ curve, ts: [0, 1] }));
            bezierPieces.push(...pieces);
        }
        return { bezierPieces, δ: undefined };
    }
    let bezierPieces;
    const order = isPosDullCorner(y)
        ? y.t === 1 && angle === 0
            ? -1
            : y.t === 0
                ? +1
                : calcPosOrder(circle, y)
        : 0;
    const loop = loops[k];
    const cpNode = getNeighbouringPoints(cpTrees.get(loop), y, order, 0)[0];
    const δ = [cpNode, cpNode];
    if (!cpNode ||
        // The special case if there is only a single sharp corner or 
        // terminating 2-prong currently in the MAT. Don't remove!
        (cpNode === cpNode.next.next)) {
        bezierPieces = loop.curves
            .map(curve => ({ curve, ts: [0, 1] }));
    }
    else {
        bezierPieces = getBoundaryPieceBeziers(δ);
    }
    return { bezierPieces, δ };
}
export { getInitialBezierPieces };
//# sourceMappingURL=get-initial-bezier-pieces.js.map