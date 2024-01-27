interface CatInfo {
    age: number;
    breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

/**
 * With the help of Record, you can specify Key & Value both
 */
const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
};

cats.boris;


/**
 * Use case:1
 */
const myObj: Record<number, string[]> = {}

// ! What if `myObj[1]` is null then ?
// myObj[1].push() // ? If you enable `noUncheckedIndexedAccess` flag in `tsconfig.json`, It throw you an error

if (myObj[1])
    myObj[1].push("my work")
