type Species = "cat" | "dog";

interface Pet {
    species: Species
}

class Cat implements Pet {
    public species: Species = "cat";

    public meow (): void {
        console.log("Meow");
    }

    public jump (): void {
        console.log("Jumping");
    }

    public walk (): void {
        console.log("Walk");
    }
}

function petIsCat (pet: Pet): pet is Cat {
    return pet.species === "cat";
}

function petIsCatBoolean (pet: Pet): boolean {
    return pet.species === "cat";
}

const p: Pet = new Cat()

p.species // but can't access Cat class function

if (petIsCat(p))
{
    p.meow() // now we can use because of `pet is Cat` type guard
}

if (petIsCatBoolean(p))
{
    p.species // can't acccess because it return only boolean, typescript got no inference from this
}

// My thought -> It is mainly use in generic or abstract classes and somewhere in the code we have to define exact class or type

// check `Statisfies` use case