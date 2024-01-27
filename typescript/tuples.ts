/**
 * Tuples can be used to store data records where the position of the data is meaningful. For instance, if you're handling a set of coordinates, a tuple can represent a point in 2D or 3D space ((x, y) or (x, y, z)).
 */

let tup: [string, number, boolean] = ["ryu", 25, true]

let details = {
    name: "rk",
    age: 28
} as const


// const

function calculateDistanceIn2D (x: number, y: number) {
    return Math.abs(y - x);
}
const arg1 = [20, 43];
// const angle1 = calculateDistanceIn2D(...arg1) // can't spread in this way because it was not sure whether value is string or number or what

// but as const is the solution
const arg2 = [20, 43] as const;
// arg2.push() // push method emitted in this way because you can't modify array
const angle2 = calculateDistanceIn2D(...arg2) // now It accepts