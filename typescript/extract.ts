type Shape =
    | { kind: "circle"; radius: number }
    | { kind: "square"; x: number }
    | { kind: "triangle"; x: number; y: number };

// Extract will return you 
type Circle = Extract<Shape, { kind: "circle" }>

type UserEvent =
    {
        type: "LOG_IN";
        payload: {
            userId: string;
        }
    } |
    {
        type: "SIGN_OUT",
    }

const sendEvent = (eventType: UserEvent["type"], payload?: any) => { }

sendEvent("LOG_IN") // here payload is required but typescript is not giving any error
sendEvent("SIGN_OUT");

type ExtractType = Extract<UserEvent, "Type">

// ! do not understand keyword `infer` yet
type ValidUserEvent<Type> = Extract<UserEvent, { type: Type }> extends { payload: infer TPayload } ? [Type, TPayload] : [Type]
// TO FIX THIS -> 
const sendEvent1 = <Type extends UserEvent["type"]> (...args: ValidUserEvent<Type>) => { }

// sendEvent1("LOG_IN") // it will give you an error
sendEvent1("LOG_IN", { userId: "wer3" }) // works
sendEvent1("SIGN_OUT")