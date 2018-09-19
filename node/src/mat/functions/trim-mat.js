"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Trims the given Medial Axis Transform so that only loops remain.
 *
 * @param mat The MAT to trim.
 */
function trimMat() {
    /*

    return f(mat);
    
    function f(vertex: Vertex, priorVertex?: Vertex) {
        
        let newNode = new Vertex(vertex.circle, vertex.cps);
        
        let edges = vertex.getEdges();
        for (let edge of edges) {
            if (edge.toVertex === priorVertex) {
                // Don't go back in tracks.
                continue;
            }

            let followEdge = true;
            let cps = edge.toVertex.cps;
            if (cps.length === 1) {
                // Don't follow edges leading to a dead end.
                followEdge = false;
            } else if (cps.length === 2) {
                // Don't follow edges not part of a loop.
                if (cps[0].loop.indx === cps[1].loop.indx) {
                    followEdge = false;
                }
            } else if (cps.length === 3) {
                // Don't follow edges not part of a loop.
                if (cps[0].loop.indx === cps[1].loop.indx &&
                    cps[1].loop.indx === cps[2].loop.indx) {
                    followEdge = false;
                }
            }

            if (followEdge) {
                f(edge.toVertex, vertex);
            }
        }
        
        return newNode;
    }
    */
}
exports.trimMat = trimMat;
