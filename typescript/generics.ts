/**
 * 1. Simple generic
 */
type MyGenericType<TData> = {
    data: TData
}

type Example1 = MyGenericType<{ firstName: string }>;

type Example2 = MyGenericType<string>;

const example1: Example1 = {
    data: {
        firstName: "Typescript"
    }
}

/**
 * 2. function generic
 * @param url
 * @returns 
 */
// we can pass `Type` argument in function, this is now a generic function which return generic type
const makeFetch = <TData> (url: string): Promise<TData> => {
    return fetch(url).then((res) => res.json());
}

makeFetch<{ firstName: string; lastName: string }>("api/endpoint").then((res) => {
    // console.log("res", res);
    res.firstName
});


/**
 * 3. Set generic
 */
const set = new Set<number>()

// set.add("sdf"); // not accepted
set.add(12); // accepted

/**
 * 4. Take data from `run type` argument if not pass any type arguments
 */

const addIdToObject = <T> (obj: T) => {
    return { ...obj, id: "123" }
}

// If you hover over the result, it takes type from run type arugment which `{firstName: "Typescript"}` in our case
const result = addIdToObject({ firstName: "Typescript" })

// accesible because of run type argument
result.firstName
result.id

/**
 * 5. ReturnType generic
 */
const getName = (): string => ""
type GetReturnType = ReturnType<typeof getName>;
type GetReturnType1 = ReturnType<() => string>; // ReturnType takes only function


/**
 * 6. Promise & ReturnType generic
 */
type GetPromiseReturnType<T extends (arg: unknown) => unknown> = Awaited<ReturnType<T>>;
type Result = GetPromiseReturnType<() => Promise<{ firstName: string, lastName: string }>>;

// type ErrorLine = GetPromiseReturnType<string> // we can only pass function into `GetPromiseReturnType`

/**
 * 7. Record: use to map properties of a type to another type
 * ref: https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type
 */
// const getKyeWithHighestValue = <TObj> (obj: TObj): { key: keyof TObj, value: number } => {
const getKyeWithHighestValue = <TObj extends Record<string, number>> (obj: TObj): { key: keyof TObj, value: number } => {
    const keys = Object.keys(obj) as Array<keyof TObj>

    // take first key & value
    let highestKey: keyof TObj = keys[0];
    let highestValue = obj[highestKey]

    // find highest key, value in object
    for (const key of keys)
    {
        if (obj[key] > highestValue)
        {
            highestKey = key;
            highestValue = obj[key]
        }
    }

    return {
        key: highestKey,
        value: highestValue

    }
}

const result1 = getKyeWithHighestValue({ a: 1, b: 2, c: 3 })
result1.key // highestKey -> c
result1.value // highestValue -> 3

// const typedObjectKeys = <TObj extends {}> (obj: TObj) : Array<keyof TObj> => {
//     return Object.keys(obj)
// }
/**
 * 8. Sometimes return type won't work properly, comment out above to check the errors
 */
const typedObjectKeys = <TObj extends {}> (obj: TObj) => {
    return Object.keys(obj) as Array<keyof TObj>
}

const result3 = typedObjectKeys({ name: "Rk", age: 28 })


/**
 * 9. Parameter generic
 */
const getValue1 = <TObj> (obj: TObj, key: keyof TObj) => {
    // if(key)
}

const result4 = getValue1({ a: 1, b: 2, c: 3 }, "a")

// make it more generic
const getValue2 = <TObj, TKey extends keyof TObj> (obj: TObj, key: TKey) => {
    // if(key)
}

const result5 = getValue1({ a: 1, b: 2, c: 3 }, "b") // now you have auto-complete in second parameter


/**
 * 10. Default Generic
 */
const createSet = <T> () => new Set<T>();

const numberSet = createSet<number>() // it creates a number Set
const unknownSet = createSet(); // it create a unknown set

// We can fix this by adding `Default Type`
const createSet1 = <T = string> () => new Set<T>();
const unknownSet1 = createSet1() // it create string Set by default

/**
 * 11. Make Fix Generic 
 */
type APIResponse<Data> = {
    data: Data,
    isError: boolean
}

const response: APIResponse<string> = {
    data: "sdf",
    isError: false
}

// what If we want our data to be Object only

type APIResponse1<Data extends Object = { status: number }> = {
    data: Data,
    isError: boolean
}

const response1: APIResponse<string> = {
    data: "sdf",
    isError: false
}

// 1. `<S extends string>` means now we can pass only string type in `ExtractColor`
// 2. `= S extends "text-red-500" represent condition for ternary operator
// 3. infer R => represent a value passed to the ExtractColor
type ExtractColor<S extends string> = S extends `text-${infer R}-500` ? R : never

// now use ExtractColor generic
type Color1 = ExtractColor<"text-red-500"> // type Color1 is now "red" type only

type Color2 = ExtractColor<"text-red-800"> // type Color2 is now "not red" type only

const colors1 = ["text-yellow-500", "text-red-500", "text-blue-500"];

// ID'K -> the use of `number` yet
type color1 = typeof colors1[number];

const findColor1 = (color: ExtractColor<color1>) => {
    return colors1.find(c => c.includes(color))
}

// findColor1();

// If we convert these things into const then it works as tuple
const colors2 = ["text-yellow-500", "text-red-500", "text-blue-500"] as const;

// ID'K -> the use of `number` yet
type color2 = typeof colors2[number]

const findColor2 = (color: ExtractColor<typeof colors2[number]>) => {
    return colors2.find(c => c.includes(color))
}

findColor2("red") // it only takes "red", "yellow" and "blue" as an argument

