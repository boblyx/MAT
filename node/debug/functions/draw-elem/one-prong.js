import { drawFs } from 'flo-draw';
/** @hidden */
function drawOneProng(g, cpNodes, classes, delay = 0, scaleFactor = 1) {
    const cp = cpNodes[0].cp;
    const { circle, pointOnShape: pos } = cp;
    const $center = drawFs.dot(g, pos.p, 0.02 * scaleFactor, 'deeppink', delay);
    const $circle = drawFs.dot(g, circle.center, 0.05 * scaleFactor, 'deeppink', delay);
    const $pos = drawFs.circle(g, circle, 'deeppink thin5 nofill', delay);
    return [...$center, ...$circle, ...$pos];
}
export { drawOneProng };
//# sourceMappingURL=one-prong.js.map