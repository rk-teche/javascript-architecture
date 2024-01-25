
// 1. satisfies
type Person3 = {
    name: string,
    age: number
}

const person3 = {
    name: "rk",
    age: 10
} satisfies Person3

// 2. infer - use to extract object type

type ExtractObjectType<T> = T extends infer U ? U : never;

// extracting the type 
type Entry = ExtractObjectType<typeof person3>

const person4: Entry = {
    age: 12,
    name: "Y"
}

// 3. as const

function calculateDistanceIn2D (x: number, y: number) {
    return Math.abs(y - x);
}
const arg1 = [20, 43];
// const angle1 = calculateDistanceIn2D(...arg1) // can't spread in this way

// but as const is the solution
const arg2 = [20, 43] as const;
// arg2.push() // push method emitted in this way because you can't modify array
const angle2 = calculateDistanceIn2D(...arg2) // now It accepts