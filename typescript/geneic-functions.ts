
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

/**
 * Distributivity
 */
type Letters = "a" | "b" | "c"

// ? case1: when you return `never` typescript map over and remove only extends conditional match
type RemoveC<TType> = TType extends "c" ? never : TType;

// ? case2: when you return `never` typescript map over and replace only extends conditional match with new one
type AddD<TType> = TType extends "c" ? "d" : TType;

type WithoutC = RemoveC<Letters>;
type LetterD = AddD<Letters>;
