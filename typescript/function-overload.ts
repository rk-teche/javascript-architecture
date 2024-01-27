function compose<Input, FirstArg> (
    func: (input: Input) => FirstArg
): (input: Input) => FirstArg

function compose<Input, FirstArg, SecondArg> (
    func: (input: Input) => FirstArg,
    func2: (input: FirstArg) => SecondArg,
): (input: Input) => SecondArg

function compose<Input, FirstArg, SecondArg, ThirdArg> (
    func: (input: Input) => FirstArg,
    func2: (input: FirstArg) => SecondArg,
    func3: (input: SecondArg) => ThirdArg,
): (input: Input) => ThirdArg

// this is a implementation of `compose` and we can modify the return based on the parameter(s) passed
function compose (...args: any[]) {
    return {}
}

const addOne = (a: number) => {
    return a * 1;
}

const numToString = (a: number) => {
    return a.toString();
}

const stringToNum = (a: string) => {
    return parseInt(a);
}

const addOneToString1 = compose(addOne)
const addOneToString2 = compose(addOne, numToString)
const addOneToString3 = compose(addOne, numToString, stringToNum)