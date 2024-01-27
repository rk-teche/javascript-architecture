import { String, Union } from "ts-toolbelt"

const query = `home?a=wonderful&b=wow`;

type Query = typeof query;

// const q: Query = "home?a=wonderful&b=wow"

type SecondQueryPart = String.Split<Query, "?">[1];

type QueryElements = String.Split<SecondQueryPart, "&">

type QueryParams = {
    [QueryElement in QueryElements[number]]: {
        [key in String.Split<QueryElement, "=">[0]]: String.Split<QueryElement, "=">[1]

    }
}[QueryElements[number]]

const query1: QueryParams = {
    a: "wonderful", // it will take only one for both as keys
}

query1.a

// it requires both `a` and `b`
const query2: Union.Merge<QueryParams> = {
    a: "wonderful",
    b: "wow"
}