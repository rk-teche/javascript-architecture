const { expected, test } = require("./common-test")
const { substract, sum, sumAsync, substractAsync } = require("./math")

test("Check Sum of 5,5", () => {
    const result = sum(5,5)
    expected(result).toBe(10)
})

test("Sync Sum of 5,5", async () => {
    const result = await sumAsync(5,5)
    expected(result).toBe(10)
})

test("Check Substraction of 5,4", () => {
    const result = substract(5,4)
    expected(result).toBe(1)
})

test("Sync Substraction of 5,4", async () => {
    const result = await substractAsync(5,4)
    expected(result).toBe(1)
})
