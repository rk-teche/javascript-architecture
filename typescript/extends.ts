const getDeepValue = <Obj, FirstKey extends keyof Obj, SecondKey extends keyof Obj[FirstKey]>
    (
        obj: Obj,
        firstKey: FirstKey,
        secondKey: SecondKey
    ) => {
    return {}
}

const deepObj = {
    foo: {
        a: true,
        b: 2
    },
    bar: {
        c: "cool",
        d: 3
    }
}

// now third argument depend upon second argument
const deepResult1 = getDeepValue(deepObj, "foo", "a")
const deepResult2 = getDeepValue(deepObj, "bar", "c")
