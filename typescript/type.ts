const person = "john"
type Person10 = typeof person;

const jname: Person10 = "john";

const obj = {
    name: "john",
    age: 24
}

type PersonDetail = typeof obj;

// define types without writing it down again
interface Person1 extends PersonDetail {
    contact: string
}

const emp1: Person1 = {
    age: 24,
    name: "Ashoka",
    contact: "sdfsdf"
}

// use object keys as optional values
type Person2 = keyof typeof obj;

const emp2: Person2 = "name"


const func1 = () => {
    const val = "string";

    return val;
}

// get function return type of use it
type Return = ReturnType<typeof func1>

const value1: Return = "hello word"

// what if function is asychronous the use `Awaited` keyword to extract async function type
const func2 = async () => {
    const val = "string";

    return val;
}

type Return1 = Awaited<ReturnType<typeof func2>>


interface MainType {
    name: string,
    age: number
}

// we are simply merging `MainType` interface into `NestedType`
type NestedType = MainType & { yearOfExperience: number }

// what if we have multiple levels of inheritance, then How can we see all properties

// type we created to get all the property's name
type Prettify<T> = {
    [K in keyof T]: T[K]
} & {}

type idk = Prettify<NestedType> // It populate all the properties immediately


// Make property optional from mandatory

interface Todo {
    title: string;
    description: string;
}

// you can't write any single property of type `Todo`
// const updateTodo1: Todo = {description: "hello world"} 

// so the solution is ->
const updateTodo2: Partial<Todo> = {} // now it accept even empty object


interface Book {
    name: string;
    publishDate?: Date;
    publishYear?: Date;
}

const book1: Book = {
    name: "Harry Potter"
}

// Now make optional to Required
const book2: Required<Book> = {
    name: "First war of independence",
    publishDate: new Date("26/08/1909"),
    publishYear: new Date("1909")
}

type NewBook = Omit<Book, "name"> // it will omit the property
const book3: NewBook = {}


type Shapes = { kind: "circle", radius: number } | { kind: "square", x: number }

type OmittedShapes = Exclude<Shapes, { kind: "circle" }>

// It will throw an Error because we've omitted the kind : cricle property
// const shape1: OmittedShapes = {
//     kind:"cricle",
//     radius: 234
// }


// the `unknown` type
const userObj: unknown = null;

interface IUser {
    id: number;
    firstName: string;
    LastName: string;
}

function isRegularUser (object: unknown): object is IUser {
    if (object !== null && typeof object === "object")
    {
        return "token" in object;
    }

    return false;
}

if (isRegularUser(userObj))
{
    // with the help of type inference `userObj` is now defined as `IUser`
    userObj.firstName
    userObj.LastName
    userObj.id

    // note -> this won't happen if we use `any` type instead of `unknown`
}