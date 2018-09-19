"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vertex_1 = require("../classes/vertex/vertex");
const cp_hash_functions_1 = require("../functions/cp-hash-functions");
/**
 * Adds a 3-prong MAT circle according to the 3 given (previously calculated)
 * points on the shape.
 *
 * @param shape
 * @param circle
 * @param ps
 * @param deltas
 */
function add3Prong(cpGraphs, orders, threeProng) {
    let { circle, ps, δ3s } = threeProng;
    if (typeof _debug_ !== 'undefined') {
        /*
        // Keep for possible future debugging.
        for (let i=0; i<3; i++) {
            let cmpBef = PointOnShape.compare(delta3s[i][0].item.pointOnShape, ps[i]);
            let cmpAft = PointOnShape.compare(delta3s[i][1].item.pointOnShape, ps[i]);

            let len = _debug_.generated.threeProngs.length-1; // Used by debug functions to reference a particular three-prong
            if (cmpBef > 0) {
                console.log(`3-PRONG Order is wrong (bef) : i: ${i} - cmp: ${cmpBef} - n: ${len}`);
                console.log(threeProng);
            }
            if (cmpAft < 0) {
                console.log(`3-PRONG Order is wrong (aft) : i: ${i} - cmp: ${cmpAft} - n: ${len}`);
                console.log(threeProng);
            }
        }
        */
    }
    cp_hash_functions_1.checkForCloseCp(cpGraphs, ps[0], circle, orders[0], 0, 'blue');
    cp_hash_functions_1.checkForCloseCp(cpGraphs, ps[1], circle, orders[1], 0, 'blue');
    cp_hash_functions_1.checkForCloseCp(cpGraphs, ps[2], circle, orders[2], 0, 'blue');
    return vertex_1.Vertex.create2(circle, orders, cpGraphs, ps, δ3s);
}
exports.add3Prong = add3Prong;
