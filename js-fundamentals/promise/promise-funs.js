const pErr = new Promise((resolve, reject) =>
{
    reject("Always fails");
});

const pSlow = new Promise((resolve, reject) =>
{
    setTimeout(resolve, 500, "Done eventually");
});

const pFast = new Promise((resolve, reject) =>
{
    setTimeout(reject, 100, "Done quick");
});

// Promise.any -> It will get resolved If any of promise get resolved
Promise.any([pErr, pSlow, pFast]).then((value) =>
{
    console.log(value);
});

// Promise.all -> It will get rejected If any of promise get rejected
Promise.all([pErr, pSlow, pFast]).then((value) =>
{
    console.log(value);
});

// Promise.allSettled -> It will return array of all promises response
Promise.allSettled([pErr, pSlow, pFast]).then((value) =>
{
    console.log(value);
    // [
    // {status: 'rejected', reason: 'Always fails'}
    // ,
    // {status: 'fulfilled', value: 'Done eventually'}
    // ,
    // {status: 'rejected', reason: 'Done quick'}
    // ]
});

// Promise.race -> It will return a promise whatever get resolved first
Promise.race([pErr, pSlow, pFast]).then((value) =>
{
    console.log(value); // response: Done quick
});


Promise.withResolvers(); // is equivalent to the following code ->

let resolve, reject;
const promise = new Promise((res, rej) =>
{
    resolve = res;
    reject = rej;
});


async function* readableToAsyncIterable(stream)
{
    let { promise, resolve, reject } = Promise.withResolvers();
    stream.on("error", (error) => reject(error));
    stream.on("end", () => resolve());
    stream.on("readable", () => resolve());

    while (stream.readable)
    {
        await promise;
        let chunk;
        while ((chunk = stream.read()))
        {
            yield chunk;
        }
        ({ promise, resolve, reject } = Promise.withResolvers());
    }
}


readableToAsyncIterable().next();