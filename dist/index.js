"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monteCarlo = exports.displaySolution = exports.randomStress = exports.costStylolite = exports.costJoint = exports.eigen = exports.normalize = exports.dot = void 0;
// ---------------------------------------------
function dot(v1, v2) {
    return v2[0] * v1[0] + v2[1] * v1[1];
}
exports.dot = dot;
function normalize(n) {
    const l = Math.sqrt(n[0] ** 2 + n[1] ** 2);
    return [n[0] / l, n[1] / l];
}
exports.normalize = normalize;
function eigen(stress) {
    const a = stress[0]; // xx
    const b = stress[1]; // xy
    const trace = a + stress[2];
    const discri = Math.sqrt(trace ** 2 - 4 * (a * stress[2] - b * b));
    // Decreasing order according to the eigen values
    return {
        v1: normalize([b, (trace + discri) / 2 - a]),
        v2: normalize([b, (trace - discri) / 2 - a])
    };
}
exports.eigen = eigen;
function costJoint(normal, stress) {
    const { v1, v2 } = eigen(stress);
    const d = dot(v1, normal);
    return Math.acos(Math.abs(d)) / Math.PI;
}
exports.costJoint = costJoint;
function costStylolite(normal, stress) {
    const { v1, v2 } = eigen(stress);
    const d = dot(v2, normal);
    return Math.acos(Math.abs(d)) / Math.PI;
}
exports.costStylolite = costStylolite;
function randomStress() {
    const theta = Math.random() * Math.PI;
    const k = Math.random();
    const c = Math.cos(theta);
    const s = Math.sin(theta);
    return {
        stress: [
            c ** 2 + k * s ** 2,
            (k - 1) * c * s,
            s ** 2 + k * c ** 2, // σyy = sin(θ)² + k.cos(θ)²
        ],
        S1: 1,
        S2: k,
        theta: theta * 180 / Math.PI
    };
}
exports.randomStress = randomStress;
function displaySolution(s) {
    console.log('Iter ' + s.iteration);
    console.log('S1   ' + s.S1.toFixed(3));
    console.log('S2   ' + s.S2.toFixed(3));
    console.log('Theta' + Math.round(s.theta) + '°');
    console.log('Cost ' + s.cost.toFixed(2));
    console.log('Fit  ' + Math.round((1 - s.cost) * 100) + '%');
    console.log('');
}
exports.displaySolution = displaySolution;
function monteCarlo(datas, nbIter) {
    const solution = {
        cost: Number.POSITIVE_INFINITY,
        S1: 0,
        S2: 0,
        theta: 0,
        iteration: -1
    };
    for (let i = 0; i < nbIter; ++i) {
        const s = randomStress();
        let c = 0;
        for (let j = 0; j < datas.length; ++j) {
            const data = datas[j];
            switch (data.type) {
                case 'Joint':
                    c += costJoint(data.normal, s.stress);
                    break;
                case 'Stylolite':
                    c += costStylolite(data.normal, s.stress);
                    break;
            }
        }
        c /= datas.length;
        if (c < solution.cost) {
            solution.cost = c;
            solution.S1 = s.S1;
            solution.S2 = s.S2;
            solution.theta = s.theta;
            solution.iteration = i;
            displaySolution(solution);
        }
    }
    return solution;
}
exports.monteCarlo = monteCarlo;
