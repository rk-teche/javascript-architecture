const expected = (actual) =>
{
    return {
        toBe(expected) {
            if(actual !== expected)
            {
                throw new Error(`${actual} is not equal to ${expected}`)
            }
        },
        toEqual(expected)
        {

        },
        toBeGreaterThan(expected)
        {

        }        
    }
}

const test = async (title, callback) =>
{
    try 
    {
        await callback()
        console.log(title)
        console.log(`Success: ${title}`)
    } catch(e)
    {
        console.log(title)
        console.error(e)
    }
}

module.exports = { test, expected }