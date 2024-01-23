// Some Important Utility types
type Person = {
    name: string,
    age: number,
    isEmployed: boolean
}

type Partialperson = Partial<Person>;
type ReadOnlyPerson = Readonly<Person>;
type NameAndAge = Pick<Person, "name" | "age">;
type WithOutEmploymentStatus = Omit<Person, "isEmployed">;



// Other examples

type Properties = "red" | "green" | "blue";
type RGB = [red: number, green: number, blue: number]

const color: RGB = [255, 0, 0]

// If you want to change it object with type string

const color1: Record<Properties, RGB> = {
    blue: [255, 0, 0],
    green: [255, 0, 0],
    red: [255, 0, 0]
}

// accept both RGB tuple and string
const color2: Record<Properties, RGB | string> = {
    blue: [255, 0, 0],
    green: "green",
    red: "blue"
}


// You can't also define your own utility functions
type ReadOnlyProps1<T> = {
    readonly [P in keyof T]: T[P];
}
