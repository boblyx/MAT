import { drawFs } from 'flo-draw';


/** @hidden */
function tightBoundingBox(g: SVGGElement, box: number[][]) {
	const $box = drawFs.polygon(g, box, 'thin5 pinker nofill');

	return $box;
}


export { tightBoundingBox }
