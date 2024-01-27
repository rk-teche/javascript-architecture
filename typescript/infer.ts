/**
 * Infer: The infer keyword compliments conditional types and cannot be used outside an extends clause. 
 * Infer allows us to define a variable within our constraint to be referenced or returned.
 */


type ReturnTyped<T> = T extends (...args: any[]) => infer R ? R : any;

type a = ReturnTyped<() => []> // void
