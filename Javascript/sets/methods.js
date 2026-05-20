const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

const C = A.union(B);
console.log(C);

const D = A.intersection(B);
console.log(D);

const E = A.difference(B);
console.log(E);

const F = A.symmetricDifference(B);
console.log(F);

const G = A.isSubsetOf(B);
console.log(G);

const H = A.isSupersetOf(B);
console.log(H);

const I = A.isDisjointFrom(B);
console.log(I);